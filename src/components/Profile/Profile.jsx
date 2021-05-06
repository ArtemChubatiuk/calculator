import React from "react";
import classes from './Profile.module.css'

const Profile = () => {

    return (
        <div className={classes.prof}>
            <div className={classes.num}>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }} onClick={console.log('sdgdsgsdf')}><h1> 7 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 8 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 9 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> + </h1></button>
            </div>

            <div className={classes.num}>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 4 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 5 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 6 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> - </h1></button>
            </div>

            <div className={classes.num}>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 1 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 2 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 3 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> * </h1></button>
            </div>

            <div className={classes.num}>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> = </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> 0 </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> , </h1></button>
                <button style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70
                }}><h1> / </h1></button>
            </div>
        </div>
    )
}

export default Profile;