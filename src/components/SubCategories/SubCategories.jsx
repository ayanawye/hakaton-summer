import { useEffect } from 'react';
import s from './Sub.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSubCategories } from '../../store/reducer/subCategories';

const SubCategories = ({ match }) => {
  // const userId = match.params.id;
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getSubCategories({userId}))
  // }, [])
  // const {subCategories} = useSelector(state => state.subCategories)
  // console.log(subCategories);

  return (
    <div>
      scss
    </div>
  );
};

export default SubCategories;