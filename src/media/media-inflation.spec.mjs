import path from 'node:path';
import config from '../../config.json' assert { type: 'json' };
import { inflateMedia } from './media-inflation.mjs';
import mock from 'mock-fs';

describe('Media Inflation Tests', () => {
  const mockFile = {
    basePath: '/images/1234.jpg',
    path: path.join(config.mediaFolder, '/images/1234.jpg'),
    value: 'fake file value'
  }
  
  beforeEach(() => {
    mock({
      [mockFile.path]: mockFile.value
    })
  });
  afterEach(() => {
    mock.restore();
  });
  
  test('should be able to inflate media', async () => {
    // Arrange
    const fakeFileBuffer = Buffer.from(mockFile.value);
    const media = {
      id: 'foo',
      fileName: 'test1',
      fileLocator: mockFile.basePath,
      mediaType: 'jpg',
      mediaWidth: 100,
      mediaHeight: 100,
      mediaSource: 'Upload',
    };
    const expected = {
      id: 'foo',
      fileName: 'test1',
      mediaType: 'jpg',
      mediaSource: 'Upload',
      mediaWidth: 100,
      mediaHeight: 100,
      dataUrl: `data:jpg;base64,${fakeFileBuffer.toString('base64')}`,
    };

    // Act
    const actual = await inflateMedia(media);

    // Assert
    expect(actual).toEqual(expected);
  });
});