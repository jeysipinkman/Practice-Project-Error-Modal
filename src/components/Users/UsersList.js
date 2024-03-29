import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length > 0 && (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};
export default UsersList;
