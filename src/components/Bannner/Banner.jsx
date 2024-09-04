import profile from '../../assets/images/Group 5.png';

const Banner = () => {
    return (
        <div className='container  mx-auto lg:w-[1290px] border-2 border-red-400'>
            <img  src={profile} alt="" />
        </div>
    );
};

export default Banner;