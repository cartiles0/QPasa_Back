# QPasa-Back

## DESCRIPTION
(Description)

## PROJECT SETUP

`npm install`

# DB SCHEMAS

## USER - PERSON

| KEY             | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|-----------------|--------------|-----------|----------|----------------|
| name            | string       |           | YES      |                |
| lastName        | string       |           | NO       |                |
| username        | string       |           | YES      | Unique         |
| email           | string       |           | YES      | RegExp, Unique |
| password        | string       |           | YES      |                |
| photo           |              |           | YES      |                |
| areaPreference  | string       |           | YES      |                |
| dateOfBirth     | date         |           | NO       |                |
| phone           | number       |           | NO       |                |
| DNI             | string       |           | NO       | Maxlength      |
| aboutMe         | string       |           | NO       | Maxlength      |
| address         | string       |           | NO       |                |
| reputation      | number       |           | NO       |                |
| yourEvents      | [ ObjectId ] | Events    | NO       |                |
| savedEvents     | [ ObjectId ] | Events    | NO       |                |
| purchasedEvents | [ ObjectId ] | Events    | NO       |                |

## USER - BUSINESS

| KEY             | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|-----------------|--------------|-----------|----------|----------------|
| name            | string       |           | YES      |                |
| CIF             | string       |           | YES      | Unique         |
| email           | string       |           | YES      | RegExp, Unique |
| password        | string       |           | YES      |                |
| photo           |              |           | YES      |                |
| phone           | number       |           | YES      |                |
| aboutMe         | string       |           | YES      | Maxlength      |
| address         | string       |           | YES      |                |
| website         | string       |           | YES      |                |
| facebookLink    | string       |           | NO       |                |
| instagramLink   | string       |           | NO       |                |
| twitterLink     | string       |           | NO       |                |
| reputation      | number       |           | NO       |                |
| yourEvents      | [ ObjectId ] | Events    | NO       |                |

## EVENTS

| KEY         | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|-------------|--------------|-----------|----------|----------------|
| title       | string       |           | YES      |                |
| description | string       |           | YES      |                |
| address     | string       |           | YES      |                |
| zipCode     | number       |           | YES      |                |
| municipality| string       |           | YES      |                |
| country     | string       |           | YES      |                |
| creator     | [ ObjectId ] | Users     | NO       |                |
| eventDate   | date         |           | YES      |                |
| capacity    | number       |           | YES      |                |
| price       | number       |           | YES      |                |
| photos      |              |           | YES      |                |
| ammenities  | string       |           | YES      |                |
| public      | boolean      |           | YES      |                |
| recourrent  | boolean      |           | YES      |                |
| policies    | string       |           | YES      |                |
| saved       | [ ObjectId ] | Users     | NO       |                |
| interested  | [ ObjectId ] | Users     | NO       |                |
| purchased   | [ ObjectId ] | Users     | NO       |                |
| views       | number       |           | NO       |                |
| tags        | [ ObjectId ] | Tags      | NO       |                |
| shares      | [ ObjectId ] | Users     | NO       |                |

## TAGS

| KEY    | TYPE   | REFERENCE | REQUIRED | VALIDATION     |
|--------|--------|-----------|----------|----------------|
| name   | string |  Users    | YES      |                |
| clicks | number |           | YES      |                |


# API ROUTES

## AUTHENTICATION ENDPOINTS

| METHOD | URL            | AUTH | FUNCTION             |
|--------|----------------|------|----------------------|
| POST   | '/auth/signup' | NO   | Create a new account |
| POST   | '/auth/login'  | NO   | Authenticate a user  |

## USERS ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                    |
|--------|-------------------|------|-----------------------------|
| GET    | '/users/:id'.     | NO   | Get user profile            |
| GET    | '/users/me'       | YES  | Get registered user profile |
| PUT    | '/users/me'       | YES  | Edit user profile           |
| PUT    | '/users/me/photo' | YES  | Edit users photo            |
| DELETE | '/users/me'       | YES  | Delete user account         |

## EVENTS ENDPOINTS

| METHOD | URL                                       | AUTH | FUNCTION                              |
|--------|-------------------------------------------|------|-------------------------------------- |
| GET    | '/events/:eventId'.                       | NO   | Look at an event                      |
| GET    | '/events/tags/:tagId'                     | NO   | List all events of a specific tag     |
| GET    | '/events/search/:term'                    | NO   | List all events of a specific search  |
| POST   | '/events/me'                              | YES  | Create an event                       |
| PUT    | '/events/me/:eventId'                     | YES  | Update event information              |
| PUT    | '/events/me/:eventId/saved'               | YES  | Increase event saved                  |
| PUT    | '/events/:eventId/views'                  | NO   | Increase event views                  |
| DELETE | '/events/me/:eventId'                     | YES  | Delete an event                       |
| GET    | '/events/:eventId/comments'               | NO   | List event comments                   |
| POST   | '/events/me/:eventId/comments'            | YES  | Add event comment                     |
| PUT    | '/events/me/:eventId/comments/:commentId' | YES  | Edit event comment                    |
| DELETE | '/events/me/:eventId/comments/:commentId' | YES  | Delete an event comment               |

## TAG ENDPOINTS

| METHOD | URL                 | AUTH | FUNCTION                         |
|--------|-------------------- |------|----------------------------------|
| GET    | '/tag'              | NO   | List all tags                    |
| POST   | '/tags/:tagId/click | NO   | Increases a tag amount of clicks |

