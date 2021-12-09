import { useEffect } from 'react';
import { useData } from '../context.js/dataContext';
import { useCrystal } from '../context.js/crystalContext';
import { useNavigate } from 'react-router-dom';
import { useIsJediAuth } from '../context.js/isJediAuth';
import { useForm } from 'react-hook-form';

const PadwanUi = () => {
   const { setPadwan, setLightSabers } = useData();
   const { crystal } = useCrystal();
   const { setLoading } = useIsJediAuth();
   const history = useNavigate();
   useEffect(() => {
      setLoading(true);
   }, [setLoading]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handleClick = async (data) => {
      const padwan = {
         name: data.name,
         age: data.age,
      };
      setPadwan(padwan);

      try {
         const sabers = await fetch('http://localhost:5000/jedisabershop/sabers');
         const { data } = await sabers.json();
         const newSaber = data.map((saber) => {
            const filterCrystal = crystal.filter((item) => item.color === saber.crystal[0].color);
            const F = 10 * padwan.age;

            const powerNeeded = 100 / (F * filterCrystal[0].f);
            const price = (filterCrystal[0].cr * powerNeeded).toFixed();

            return {
               id: saber.id,
               name: saber.name,
               crystal: saber.crystal[0].name,
               color: saber.crystal[0].color,
               power: filterCrystal[0].cr,
               force: powerNeeded,
               price: price,
            };
         });

         setLightSabers(newSaber);
         history('/sabers');
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div>
         <form onSubmit={handleSubmit(handleClick)} className="padwanDetail">
            <input
               type="text"
               placeholder="Enter the padwan name ..."
               className="input"
               {...register('name', { required: 'Please insert your Name' })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
            <input
               type="number"
               placeholder="Enter the padwan age ..."
               className="input"
               {...register('age', { required: 'Please insert your age' })}
            />
            {errors.age && <p className="error">{errors.age.message}</p>}
            <button className="submitButton">Next</button>
         </form>
      </div>
   );
};

export default PadwanUi;
