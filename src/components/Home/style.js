import styled from 'styled-components';

export const HomeStyle = styled.div`
height: 100vh;
align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Canvas = styled.div`
    background: url(http://findmatthew.com/style/../img/filler.png) center center/cover;
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
export const Text = styled.div`
    margin: auto;
    font-size: 32pt;
    line-height: 36pt;
    z-index: 1;
    color: rgb(255, 255, 255);
    pointer-events: none;
    margin-bottom:3%;
`;
export const Name = styled.span`
    color: #e31b6d;
    font-family: "Raleway-semibold";
`;
export const Button = styled.button`
    background-color: transparent;
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    z-index: 1;
    padding: 3%;
`;

export const NavbarStyle = styled.nav`
    top: 100vh;
    left: 0;
    position: absolute;
    background: #1b242f;
    border-bottom: 3px solid #04c2c9;
    height: 50px;
    text-align: left;
    width: 100%;
    z-index: 99;
    display: flex;
    justify-contect: center;
    align-items: center;
    @keyframes moveDown {
        from {
          transform: translateY(-10rem);
        }
        to {
          transform: translateY(0rem);
        }
      }
`;
export const Item = styled.li`
    padding-left: 4%;
    list-style-type: none;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.5s;
    :hover {
        color: #e31b6d;
    }
`;