import { Text } from 'react-native';
const Greeting = ({ text, children }) => (
    <div>
        <Text>{text}</Text>
        {children}
    </div>
);

export default Greeting;
