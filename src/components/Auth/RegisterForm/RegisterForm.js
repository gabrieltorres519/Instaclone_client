    import React from 'react';
    import {Form,Button} from "semantic-ui-react";
    import "./RegisterForm.scss";
    

    export default function RegisterForm(props) {

        const {setShowLogin} = props;
        console.log(props);

        const onSubmit = ()=>{
          console.log("Formulario enviado");
        }

      return (
        <>
          <h2 className="register-form-title">Registrate para ver las publicaciones de tus amigos</h2>
          <Form className="register-form" onSubmit={onSubmit}> 
            <Form.Input type="text" placeholder="Nombre y apellidos" name="name"/>
            <Form.Input type="text" placeholder="Nombre de usuario" name="username"/>
            {/* No se pone type email porque la validación de HTML tipo email no se usará, sino que se hará con una librería */}
            <Form.Input type="text" placeholder="Correo electrponico" name="email"/>
            <Form.Input type="password" placeholder="Contraseña" name="password"/>
            <Form.Input type="text" placeholder="Repetir contraseña" name="repeatPassword"/>
            <Button type="submit" className="btn-submit">Registrarse</Button> 
          </Form>
        </>
      )
    }
    