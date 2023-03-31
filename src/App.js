

import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://res.cloudinary.com/diclvamvr/image/upload/v1676475467/mens-clothing-set-boots-watch-260nw-1427016581.jpg_bw1dkb.webp"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://res.cloudinary.com/diclvamvr/image/upload/v1676475467/mens-clothing-set-boots-watch-260nw-1427016581.jpg_bw1dkb.webp"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://res.cloudinary.com/diclvamvr/image/upload/v1676475467/sneaker-aging-lead-1626192736_yfvpew.jpg"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://res.cloudinary.com/diclvamvr/image/upload/v1676475467/womens-istockphoto-1208148708-612x612_eazbbh.jpg"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://res.cloudinary.com/diclvamvr/image/upload/v1676475467/mens-clothing-set-boots-watch-260nw-1427016581.jpg_bw1dkb.webp"
    }
  ]

  return (
    <Directory categories={categories}/>
  );
  };

export default App;
