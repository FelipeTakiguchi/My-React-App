import { useState } from 'react';
import Modal from './components/Modal';
import styles from './styles.module.scss';

function App() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if(!show) {
      setShow(!show);
    }
    if (title != '' && description != '') {
      if (show) {
        setTasks([...tasks,
        {
          Title: title,
          Description: description
        }]
        );

        setTitle('');
        setDescription('');
      }
    } else {
      return (
        <div>Erro</div>
      )
    }
  }

  const RenderTasks = () => {
    return tasks.map(task => {
      return (
        <div className={styles.card}>
          <h3>{task.Title}</h3>
          <p>{task.Description}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <header>
        <h1 className={styles.header__title}>My Task Manager</h1>
      </header>
      <div className={styles.container}>
        {
          show ?
            <Modal title={title} setTitle={setTitle} description={description} setDescription={setDescription}></Modal> :
            <></>
        }
        <button className={`${styles.button} ${styles.orange}`} onClick={addTask}>+</button>
        <p className={styles.title}>Tasks</p>
        <RenderTasks />
      </div>
    </div>
  );

}

export default App;