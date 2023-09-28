import axios from 'axios';
import inquirer from 'inquirer';

const omdbUrl = ' http://www.omdbapi.com/?i=tt3896198&apikey=5453dfdc';

const enterMovieDetails = [
  {
    type: 'input',
    name: 'title',
    message: 'Preferred Movie title',
  },
  {
    type: 'input',
    name: 'year',
    message: 'Release year',
  },
];

const fetchMovies = async (list) => {
  try {
    const response = await axios.get(omdbUrl, {
      params: {
        y: list.year,
        s: list.title,
      },
    });

    if (response.data) {
      console.log(response.data);
      
    } else {
      console.log('there are no movies');
    }
  } catch (error) {
    console.error(error);
  }
};

const run = async () => {
  try {
    await inquirer.prompt(enterMovieDetails);
    await fetchMovies(list);
  } catch (error) {
    console.error(error);
  }
};

run();
