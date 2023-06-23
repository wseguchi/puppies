import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    // Shows message if user hasn't post anything yet...
    if (data.length > 0)
      return (
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      );
    else
      return (
        <div>
          <p className={styles.marginBottom}>
            Oh... You haven&apos;t post anything yet.
          </p>
          <Link to='/social-dogs'>
            <Button>Check other user&apos;s photos!</Button>
          </Link>
        </div>
      );
  } else return null;
};

export default FeedPhotos;
