import { on } from "events";
import { useState } from "react";
import Criar from "./components/Modal/Criar";
import Editar from "./components/Modal/Editar";
import Visualizar from "./components/Modal/Visualizar";
import Deletar from "./components/Modal/Deletar/deletar";

export default function ModalTeste() {
    const [showCriarModal, setShowCriarModal] = useState(false);
    const [showVisualizarModal, setShowVisualizarModal] = useState(false);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showDeletarModal, setShowDeletarModal] = useState(false);
  
    function handleOpenModalAdicionar() {
      setShowCriarModal(true);
    };

    function handleOpenModalVisualizar() {
      setShowVisualizarModal(true);
    };

    function handleOpenModalEditar() {
      setShowEditarModal(true);
    };

    function handleOpenModalDeletar() {
      setShowDeletarModal(true);
    };

    function handleConfirmModalAdicionar() {
      // Do something when the user confirms the modal
      setShowCriarModal(false);
    };

    function handleConfirmModalEditar() {
      // Do something when the user confirms the modal
      setShowEditarModal(false);
    };

    function handleConfirmModalDeletar() {
      // Do something when the user confirms the modal
      setShowDeletarModal(false);
    };
  
    return (
      <div>
        <button >adicionar</button>
        
        <button >visualizar</button>
        
        <button >editar</button>
        
        <button >deletar</button>
        
      </div>
    );
  };
  
  
  
  