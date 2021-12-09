import SaberCard from './SaberCard';
import { useData } from '../context.js/dataContext';

const LightSabers = () => {
   const { lightSabers } = useData();

   return (
      <>
         <div className="sabersList">
            {lightSabers?.map((saber) => (
               <SaberCard saber={saber} key={saber.id} />
            ))}
         </div>
      </>
   );
};

export default LightSabers;
