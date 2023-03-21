import { jest } from '@jest/globals';

const mockFindByPk = jest.fn();
const mockMedia = {
  findByPk: mockFindByPk
};

jest.unstable_mockModule('./models/index.mjs', () => ({
  Media: mockMedia,
  default: {
    Media: mockMedia
  }
}));

const { getMediaById } = await import('./media-repo.mjs');

describe("Media Repo Tests", () => {
  test('getMediaById should be able to get media by id', async () => {
    // Arrange
    const givenId = 1;
    const expected = {
      id: 'foo',
      fileName: 'test1',
      fileLocator: '/images/1234.jpg',
      mediaType: 'jpg',
      imageWidth: 100,
      imageHeight: 100,
      imageSource: 'Upload',
    };

    mockFindByPk.mockResolvedValue(expected);

    // Act
    const actual = await getMediaById(givenId);

    // Assert
    expect(actual).toEqual(expected);
    expect(mockFindByPk).toHaveBeenCalledWith(givenId);
  });
});
