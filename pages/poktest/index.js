import styles from '../../styles/Poktest.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { poktests: data}
    }
}

const Poktest = ({poktests}) => {
    return ( 
        <div>
            <h1>Poktest index</h1>
            {poktests.map(poktest => (
             <Link href={ '/poktest/'+poktest.id } key={poktest.id}>
                 <a className={styles.single}>
                     <h3>{poktest.name}</h3>
                 </a>
             </Link>     
            ))}
        </div>
     );
}
 
export default Poktest;