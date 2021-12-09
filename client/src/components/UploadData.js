import { useState } from 'react';
import { useForm } from 'react-hook-form';
import getPrice from '../utils/getPrice';

const UploadData = () => {
   const [quotation, setQuotation] = useState();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const handleClick = async (data) => {
      const newData = await getPrice(data.file[0], data.age, data.lightSaber);
      setQuotation(newData);
   };

   return (
      <div className="padwanQuotation">
         <div>
            <form onSubmit={handleSubmit(handleClick)} className="quotationInput">
               <h1> Upload The File</h1>
               <input
                  type="file"
                  name="xml-upload"
                  id="xml"
                  style={{ display: 'none' }}
                  {...register('file', { required: 'Please select a file' })}
               />
               {errors.file && <p className="error">{errors.file.message}</p>}
               <label htmlFor="xml" className="uploadImageBtn">
                  Upload File
               </label>

               <input
                  type="text"
                  className="input"
                  placeholder="Enter light saber name ... "
                  {...register('lightSaber', { required: 'Enter light saber name' })}
               />
               {errors.lightSaber && <p className="error">{errors.lightSaber.message}</p>}

               <input
                  type="text"
                  className="input"
                  placeholder="Enter Your Age ... "
                  {...register('age', { required: 'Please Enter you age' })}
               />
               {errors.age && <p className="error">{errors.age.message}</p>}

               <button className="submitButton">Show Price</button>
            </form>
         </div>

         {quotation && (
            <div className="quotationDetail">
               <h4>
                  <strong className="tag">Name : </strong>
                  {quotation.name}
               </h4>

               <p>
                  {' '}
                  <strong className="tag">Crystal : </strong>
                  {quotation.crystal}
               </p>
               <p>
                  {' '}
                  <strong className="tag">Crystal Type : </strong>
                  {quotation.crystalType}
               </p>
               <p>
                  {' '}
                  <strong className="tag">Color : </strong>
                  {quotation.color}
               </p>

               <p>
                  {' '}
                  <strong className="tag">Force Needed : </strong> {quotation.powerNeeded}
               </p>

               <p>
                  {' '}
                  <strong className="tag">Price : </strong>$ {quotation.price}
               </p>
            </div>
         )}
      </div>
   );
};

export default UploadData;
