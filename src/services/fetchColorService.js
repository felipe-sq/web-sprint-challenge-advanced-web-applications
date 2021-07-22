import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
  return axiosWithAuth().get('/colors')
    .then(res => {
      // console.log("fetchColorService is working! Output:",res.data);
      return (res.data);
    })
    .catch(err => console.log(err));
};

export default fetchColorService;