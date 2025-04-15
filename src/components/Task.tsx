import styles from "./Task.module.css";

export function Task(){
    return(
        <div className={styles.wrapper}>
            <input type="checkbox" id="huey" name="drone" value="huey" />
            <label for="huey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum nemo ad cum perspiciatis unde earum, sapiente suscipit voluptas, porro et at officiis ducimus quas recusandae dolorem accusantium, iusto aliquam.
            </label>
        </div>
    );
}