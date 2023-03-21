import { jest } from '@jest/globals';

jest.unstable_mockModule('./media-inflation.mjs', () => ({
    inflateMedia: jest.fn()
    }));

jest.unstable_mockModule('../baggintag-repo/media-repo.mjs', () => ({
    getMediaById: jest.fn()
    }));

const { getMediaById } = await import('../baggintag-repo/media-repo.mjs');
const { inflateMedia } = await import('./media-inflation.mjs');
const { getMedia } = await import('./media-api.mjs');

describe('Media API Tests', () => {
    test('should be able to get media by id', async () => {
        // Arrange
        const givenId = 'given id';
        const fakeGetReturn = {
            id: 'fake get id'
        };

        const expected = {
            id: 'foo',
            fileName: 'test1',
            mediaType: 'jpg',
            mediaSource: 'Upload',
            mediaWidth: 100,
            mediaHeight: 100,
            dataUrl: 'data:jpg;base64,foo',
        };

        getMediaById.mockResolvedValue(fakeGetReturn);
        inflateMedia.mockResolvedValue(expected);
        
        
        // Act
        const actual = await getMedia(givenId);

        // Assert
        expect(getMediaById).toHaveBeenCalledWith(givenId);
        expect(inflateMedia).toHaveBeenCalledWith(fakeGetReturn);
        expect(actual).toEqual(expected);
    });

    test('should be able to get available tag sets for media', () => {});

    test('should be able to search for media', () => {
        // Expand on this, add more tests, what are we searching by?
        // Search by DataSet, DataSetGroup, Tag, TagSetTemplate, Date Added, Date Modified
        // Needs Paging
    }); 

    test('should be able to upload media', () => {});

    test('should be able to upload bulk media', () => {});
    test('should be able to add a new tag set to media', () => {});
    test('should be able to add an existing tag set to media', () => {});
    test('should be able to delete media', () => {});
});

/*
        get ./media/{id}
        get ./media/{id}/available-tag-sets
        get ./media/search
        post ./media/upload
        post ./media/uploadBulk
        post ./media/{id}/add-tag-set
            - either creates a new tag set or adds an existing one to the image
        delete ./media/{id}
*/