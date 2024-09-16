import { Oval } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <section className={style.LoaderContainer} role="alert">
      <Oval
        height={80}
        width={80}
        color="grey"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="orange"
        strokeWidth={2}
        strokeWidthSecondary={2} />
    </section>
  );
};

export default Loader;