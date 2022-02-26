import React from 'react';
import { Button } from "semantic-ui-react";
import {useHistory} from "react-router-dom"
import {useApolloClient} from "@apollo/client";
import useAuth from '../../../hooks/useAuth';
import PasswordForm from '../PasswordForm/PasswordForm';
import "./SettingsForm.scss";

export default function SettingsForm(props) {

    const {setShowModal, setTitleModal, setChildrenModal} = props;
    const history = useHistory();
    const client = useApolloClient();
    const {logout} = useAuth();

    const onChangePassword = () => {
        // console.log("Cambiar contraseña");
        setTitleModal("Cambiar tu contraseña");
        setChildrenModal(<PasswordForm logout={onLogout} />);
    }

    const onLogout = () => {
        client.clearStore();
        logout();
        history.push("/");

    }

  return (
    <div className='settings-form' >
        <Button onClick={onChangePassword} >Cambiar contraseña</Button>
        <Button>Cambiar email</Button>
        <Button>Descripción</Button>
        <Button>Sitio Web</Button>
        <Button onClick={onLogout} >Cerrar sesión</Button>
        <Button onClick={() => setShowModal(false)}>Cancelar</Button>
    </div>
  )
}
