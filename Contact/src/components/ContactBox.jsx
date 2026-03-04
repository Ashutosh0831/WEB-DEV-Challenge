import "../index.css"

const ContactBox = ({ contact }) => {
  if (!contact) return null;
  const { user, email, image, number, address } = contact;

  console.log(image);
  

  return (
    <>
      <div className='h-50 w-50 flex justify-center rounded-2xl object-fill box-container'>
        <div>
          <img src={image} alt="Image" 
            className='rounded-xl h-50 w-50 opacity-50 '/>
        </div>
        <div className='text-center font-serif text-white absolute my-15'>
          <h2 className='text-2xl font-semibold'>{user}</h2>
          <h3 className='text-xl'>{email}</h3>
          <h4 className='text-l'>{number}</h4>
          <h4>{address}</h4>
        </div>
      </div>
    </>
  );
}

export default ContactBox
