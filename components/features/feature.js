import Link from "next/link";
import classes from "./feature.module.css";
import Image from "next/image";

function Feature(props) {
  return (
    <div className={classes.shadow}>
      <Link href={`services/${props.title}`}>
        <div
          className={`${classes.card} ${classes.bgImg}`}
          style={{
            backgroundImage: `url(${props.img})`,
          }}
        >
          <div className={classes.textBg}>
            <div className={classes.img}>
              <Image
                src="/images/ct-scan.png"
                alt="logo"
                width="100%"
                height="100%"
              />
            </div>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
          </div>
        </div>
      </Link>   
    </div>
    
  );
}

export default Feature;
