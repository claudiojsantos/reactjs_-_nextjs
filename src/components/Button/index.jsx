import "./styles.css";

export const Button = ({ disabled, onClick, text }) => {
  return (
    <button disabled={disabled} className='button' onClick={onClick}>
      {text}
    </button>
  );
};

// export class Button2 extends Component {
//   render() {
//     const { text, onClick, disabled } = this.props;

//     return (
//       <button disabled={disabled} className='button' onClick={onClick}>
//         {text}
//       </button>
//     );
//   }
// }
