# Baggintag #

todo: probably actually correctly format this

## Purpose ##
This is meant to be an app to help Train a Stable diffusion network. 

## Problem ##
In trying to train up my own stable diffusion model, I've had to try to manually tag or fix existing tags on a lot of images. What I have discovered is that A- it takes a lot of time and effort that I don't have and B- the tag's just don't communicate what I think Stable Diffusion needs to be able to create what I want it to create. Stable Diffusion Web UI by automatic helps a bit, but can be flakey on larger data sets

## Proposed solution ##
Make something that autotags- they do exist, but the tags they create just don't seems to describe what I'm looking for very well. So, I need to be able to store images, manipulate them to a smaller extent, tag images, train a tagger and apply that tagger to the images, enter new tags/descriptions for the images, filter out and train Textual Inversions to be able to communicate styles more efficiently, and generate the training data in a format that stable diffusion can use. I should also be able to use video and break it down.

## Features needed ##
- UI of some sort, probably a web ui, basically for all of the below
- API for uploading, tagging, creating, updating, searching images and videos and their tags. 
    - Supported videos should be at minimum gif, mp4, wmv, vob(that weird DVD format)
    - This api should include singular and bulk variations.
    - This api should accept url's or files
    - Image data should include size, file type, name, source if possible, artist if possible, original tag sets (if tag set given, then original source required)
- API for converting, scaling, and cropping images
    - minimum input acceptance: webm, jpg, png, bmp, any common web image type
    - minimum output acceptance: jpg and png 
- API for capturing frames out of video
    - there should be a way to link the image to the video source, including a timestamp and the box defining where in the frame the image is (even if it's the whole frame)
- API for defining a tagging scheme, and possibly running it
    - not just the type of tag's applied, but maybe a way to define a work flow for applying tag's. (Pallete style example: run network that identifies character, create a list of tags for entire picture, create a descriptor for each character, create a descriptor for entire image, create a descriptor for background)
- API for defining TYPES of tags
    - reason for it is that the type of tag may be important to if it can be dropped or not, as well as the location in the final list of printed tags
        - example: the pallate/description technique, location of description is important and it probably shouldn't be dropped, but the rest of the tags probably are droppable.
- API for defining a Template of Tags
    - this is the list of available tags commonly recognized
- API for defining a Tag Mapping
    - this is a way for suggestions and conversions to be made, allowing for images to be mapped to different networks more easily
- API for defining training data sets, sub sets
    - training data set for images should include a defined image size requirement and file type(s) requirement (including color depth and alpha or not)
- API for defining an intended training session
    - should take a set, or list of sets
    - should take a defined network and starting point (IE convNext/Stable diffusion 1.X/2.0/furry diffusion whatever)
    - should have a way to define what the dataset generation requires in the final steps for training (IE mirroring, dropping tags, scattering tags)
    - if possible, it should spit out a config that stable diffusion uses.
        - this may require altering stable diffusion, especially when dealing with tag dropping/randomizing/etc. This might allow for alternate description sets even
- API for defining Taggers, what they tag, their network type
- API for training taggers directly
- API for defining Textual Inversion styles and training sets
- API for editing images and pulling frames out of video
- API for tracking the generation of data sets- defining what I intend to add, and what I have added- sort of like a work queue.
    - possibly the above API also needs a list of taggers it applies to each image or instead uses the "tagging scheme" api defined above


## Notes for development Intent ##
This probably should end up turning into a series of api's and utilities,
I will try to use what's out there already so I don't have to reinvent the wheel.

## Tech Stack/ Frameworks ##

- Node Backend for API's
- Koa for API framework
- FFMPEG for video processing
- ImageMagick for image processing
- React for UI
- MariaDB for database
- Sequelize for ORM
- Docker/Kubernetes for containerization?
    - at least for part of it, may not be able to do the video processing in a container, or starting the training process from a container
- Testing: Jest, Enzyme, Jasmine


## Plan of Execution ##
 First Round:
    - Setup Dev environment
        x - Tests
        x - Linting
        x - Debugging
        x - Git Repository
        - No Docker for the API, but Docker for the UI
    - Create a basic API for uploading images and videos with their existing tags, as well as get and search
        get ./media/{id} (completed repo and api-level call, need to make endpoint)
        get ./media/{id}/available-tag-sets
        get ./media/search
        post ./media/upload
        post ./media/uploadBulk
        post ./media/{id}/add-tag-set
            - either creates a new tag set or adds an existing one to the image
        delete ./media/{id}

    - Create a basic API for creating A tag set and updating it
        get tag-sets
        get tag-sets/search
        get tag-sets/{id}
        get tag-sets/{id}/images
        post tag-sets/new
        post tag-sets/{id} -- overwrites all tags
        post tag-sets/{id}/append-tags
        post tag-sets/{id}/remove-tags
        delete tag-sets/{id}

    - Create a basic API for creating a tag mapping
        get tag-mappings
        get tag-mappings/search
        get tag-mappings/{id}
        post tag-mappings/new
        post tag-mappings/{id} -- overwrites all tags
        post tag-mappings/{id}/append-mapping
        post tag-mappings/{id}/remove-mapping
        delete tag-mappings/{id}


    - Create a basic API for creating a data set and groupings
        get data-sets
        get data-sets/search
        get data-sets/{id}
        get data-sets/{id}/images
        post data-sets/new
        post data-sets/{id}/append-images
        post data-sets/{id}/remove-images
        delete data-sets/{id}
    
    - Create a basic api for creating a data set group
        get data-set-groups
        get data-set-groups/search
        get data-set-groups/{id}
        get data-set-groups/{id}/data-sets
        post data-set-groups/new
        post data-set-groups/{id}/append-data-set-group
            - copy's the given data set group's data sets into this one
        post data-set-groups/{id}/append-data-sets
        post data-set-groups/{id}/remove-data-sets
        delete data-set-groups/{id}


    - Create a basic UI for uploading images and videos with their existing tags
    - Create a basic UI for uploading images and videos in bulk (Zipped up)
    - Create a basic UI for searching images
    - Create a basic UI for searching tag sets
    - Create a basic UI for defining a Tag Template (use tag set API, but include functionality for building up a full list of tags)
    - Create a basic UI for defining a Tag Mapping
    - Create a basic UI for searching Tags

Second Round:
    - Create a basic API for transforming images
    - Create a basic API for pulling frames out of videos
    - Create a basic API for defining a tagger
    