import axios from 'axios';
const PICTURE_SOURCE = 'https://pixabay.com/api/';

const queryOptions = {
  key: '33733439-74c5535c98718738ef9f23e27',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

async function api(name, pageCounter) {
  // console.log('pageCounter==>',pageCounter )
  const colectedURL = `${PICTURE_SOURCE}?key=${queryOptions.key}&q=${name}&image_type=${queryOptions.image_type}&orientation=${queryOptions.orientation}&safesearch=${queryOptions.safesearch}&page=${pageCounter}&per_page=${queryOptions.per_page}`;

  return axios.get(colectedURL).then(r => r.data.hits);
}

export { api };
