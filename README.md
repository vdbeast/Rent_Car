## Project Name - Rent_car

This is a web application for searching cars with the ability to add them to the favorites list. Users can search for cars using various criteria, add them to their favorites list, and view detailed information about each car. JavaScript was used for development. The framework used was Redux. The database was created using Mockapi.io.

## Project Launch

Here are a few steps to run the project on your device:

- Clone the repository: `git clone https://github.com/vdbeast/Rent_car.git`
- Install dependencies: `npm install`
- Start the server: `npm start`

## Project Structure

The database is created in Mockapi with the following fields: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, mileage. Regarding the frontend part. Files in the src/ folder are created for source code, public/ - for static resources.

## Active Services and API:

Axios: Used for making HTTP requests to the server and exchanging data with a remote API. It is used to retrieve and send data to update, create, or delete objects in the respective database.

## Interactions and Requests:

Catalog Retrieval: Axios is used to request a catalog of cars from the remote server using the GET method. The received data is processed and displayed on the catalog page.

Interaction with Images: Car images are stored in cloud storage, and their links are added to the respective objects in the database for use on the website.

The information received from external services contains car data, including images, model, year, address, and other characteristics.

## Limitations and Key Parameters:

As car data is regularly updated, images and other data may change over time. It is recommended to periodically update the data to have current information.

## Development Commands

Here are a few commands that can be used for development:

- `npm start` - start the development server
- `npm test` - run tests

Contact Information
If you have any questions or suggestions, please contact us:

- Email: vladimirdrobotun1994@gmail.com
- GitHub: [vdbeast](https://github.com/vdbeast)
