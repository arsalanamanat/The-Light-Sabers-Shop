import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import xml2js from 'xml2js';

const CreateSaber = () => {
   const history = useNavigate();
   const [alert, setAlert] = useState('');

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const handleClick = async (data) => {
      const body = {
         saber: {
            id: [uuidv4()],
            name: [data.name],
            available: [data.quantity],
            crystal: [
               {
                  name: [data.crystal],
                  color: [data.category],
               },
            ],
         },
      };
      const builder = new xml2js.Builder();
      const xml = builder.buildObject(body);
      const options = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/xml',
         },
         body: xml,
      };
      try {
         const response = await fetch('http://localhost:5000/jedisabershop/saber', options);
         if (response.ok) {
            reset();
            setAlert('Light Saber Successfully Created');

            setTimeout(() => {
               setAlert('');
               history(-1);
            }, 2000);
         }
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="createSaberDiv">
         <form className="createSaberDiv" onSubmit={handleSubmit(handleClick)}>
            <input
               type="text"
               className="input"
               placeholder="Enter the name  ..."
               {...register('name', { required: 'Please insert your Name' })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <input
               type="text"
               className="input"
               placeholder="Enter the Crystal  ..."
               {...register('crystal', { required: 'Please insert Crystal name' })}
            />
            {errors.crystal && <p className="error">{errors.crystal.message}</p>}

            <select
               name="colors"
               id="colors"
               className="input select"
               {...register('category', { required: 'Please select the crystal color' })}
            >
               <option value="">Select ...</option>
               <option value="green">green</option>
               <option value="red">red</option>
               <option value="blue">blue</option>
            </select>
            {errors.category && <p className="error">{errors.category.message}</p>}
            <input
               type="text "
               className="input"
               name="quantity"
               placeholder="Enter the quantity  ..."
               {...register('quantity', { required: 'Please insert the crystal quantity' })}
            />
            {errors.quantity && <p className="error">{errors.quantity.message}</p>}

            <button className="submitButton">Create Saber</button>
         </form>

         {alert && <h4 className="result">{alert}</h4>}
      </div>
   );
};

export default CreateSaber;
