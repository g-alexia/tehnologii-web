import { useNavigate } from "react-router";

const Home = () => {

    const navigate = useNavigate();
  return ( <>
    <p>Home</p>
    <button onClick={() => {
        navigate('/tasks');
        }}
    >
        Go to Tasks
    </button>
  </>
  );
}

export default Home; 
    