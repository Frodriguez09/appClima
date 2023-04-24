import React from "react";
import addNotification from "react-push-notification";

const ButtonPush = () =>{
    const notificacion =() =>{
        addNotification({
            title: 'Luis Fernando Rodriguez Osuna',
            message: 'Este es ejemplo de notificacion push',
            duration: 4000,
            native: true,
        });
    }
    return(
        <div className="col-12 d-grid gap-1">
            <button onClick={notificacion} type="button" className="btn btn-lg btn-success fw-bold fs-3">Notificacion Push</button>
        </div>
    );
};

export default ButtonPush;