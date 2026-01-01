import Activities from './activitiesCardComponents/Activities';
import MobileActivities from './activitiesCardComponents/MobileActivities';

const ActivitiesCardContainer = () => {
    return (
        <section>
            <MobileActivities />
            <Activities />
            <h3
                className='mt-6 text-dark tracking-wide text-lg md:text-2xl font-semibold
                text-center uppercase font-dela-gothic-one leading-6 md:leading-7'
            >
                ¡Comienza ahora<br />tus clases!
            </h3>
        </section>
    )
}

export default ActivitiesCardContainer;
