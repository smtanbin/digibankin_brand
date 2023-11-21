import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedHeader = ({ text }: any) => {


  const linearWipeAnimation = keyframes`
  to {
    background-position: 200% center;
  }
`;

  const LinearWipeText = styled.h1`

  background: linear-gradient(to right, #056839, #00bfa5, #D8DF20, #750000,#D8DF20 , #00bfa5 ,#056839 );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${linearWipeAnimation} 9s linear infinite;
`;
  return (
    <LinearWipeText>{text.toString()}</LinearWipeText>
  )
}


const HoverZoomImage = styled.img`
  transition: transform 0.3s ease-in-out;
  aspect-ratio: 4 / 3; 
  width: 100%; /* Take full width */
  object-fit: cover; /* Crop the image while maintaining its aspect ratio */

  &:hover {
    transform: scale(1);
    aspect-ratio: unset; /* Unset aspect ratio on hover to show the original ratio */
  }
`;


// const HoverZoomImage = styled.img`
//   transition: transform 0.3s ease-in-out;
//   aspect-ratio: 1/1; /* Setting the default aspect ratio */
//   object-fit: cover; /* Crop the image while maintaining its aspect ratio */


//   &:hover {
//     transform: scale(2);
//     aspect-ratio: unset; /* Unset aspect ratio on hover to show the original ratio */
//   }
// `;

export { AnimatedHeader, HoverZoomImage }