import axios from 'axios';
const fetch = (searchValue, numberOfPage) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${numberOfPage}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`
  );
};

export default fetch;
