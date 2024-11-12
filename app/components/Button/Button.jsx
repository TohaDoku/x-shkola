import './Button.css'

export default function Button({titleBtn}) {
  return (
    <button className='btn-primary'>
        {titleBtn}
    </button>
  );
}