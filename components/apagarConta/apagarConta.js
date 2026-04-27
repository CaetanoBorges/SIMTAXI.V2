
        // Definição do Web Component
        class DeleteAccountModal extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.render();
            }

            render() {
                this.shadowRoot.innerHTML = `
                    <style>
                        :host {
                            --modal-z-index: 1000;
                            --modal-bg-color: rgba(0, 0, 0, 0.5);
                            --container-bg-color: white;
                            --primary-color: #ff0000;
                            --warning-bg-color: #fff8e1;
                            --warning-border-color: #ffc107;
                        }

                        .modal-overlay {
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background-color: var(--modal-bg-color);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: var(--modal-z-index);
                            opacity: 0;
                            visibility: hidden;
                            transition: all 0.3s ease;
                        }

                        .modal-overlay.active {
                            opacity: 1;
                            visibility: visible;
                        }

                        .delete-account-container {
                            max-width: 600px;
                            width: 90%;
                            background-color: var(--container-bg-color);
                            border-radius: 10px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                            padding: 30px;
                            max-height: 90vh;
                            overflow-y: auto;
                            margin: 20px;
                            position: relative;
                        }

                        .close-btn {
                            position: absolute;
                            top: 15px;
                            right: 15px;
                            background: none;
                            border: none;
                            font-size: 1.5rem;
                            cursor: pointer;
                            color: #666;
                            width:10px
                        }

                        h2 {
                            color: var(--primary-color);
                            margin-top: 0;
                            border-bottom: 1px solid #eee;
                            padding-bottom: 15px;
                            padding-right: 30px;
                        }
                        
                        .warning-message {
                            background-color: var(--warning-bg-color);
                            border-left: 4px solid var(--warning-border-color);
                            padding: 15px;
                            margin-bottom: 25px;
                            border-radius: 4px;
                        }
                        
                        .form-group {
                            margin-bottom: 20px;
                        }
                        
                        label {
                            display: block;
                            margin-bottom: 8px;
                            font-weight: 600;
                        }
                        
                        select, textarea, input[type="password"] {
                            width: 100%;
                            padding: 10px;
                            border: 1px solid #ddd;
                            border-radius: 4px;
                            font-family: inherit;
                            font-size: 14px;
                            box-sizing: border-box;
                        }
                        
                        textarea {
                            min-height: 100px;
                            resize: vertical;
                        }
                        
                        .checkbox-group {
                            margin: 15px 0;
                        }
                        
                        .checkbox-item {
                            margin-bottom: 10px;
                            display: flex;
                            align-items: center;
                        }
                        
                        .checkbox-item input {
                            margin-right: 10px;
                        }
                        
                        .actions {
                            display: flex;
                            justify-content: flex-end;
                            gap: 15px;
                            margin-top: 30px;
                        }
                        
                        button {
                            padding: 12px 24px;
                            border: none;
                            border-radius: 4px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.2s;
                        }
                        
                        .cancel-btn {
                            background-color: #f0f0f0;
                            color: #333;
                        }
                        
                        .cancel-btn:hover {
                            background-color: #e0e0e0;
                        }
                        
                        .delete-btn {
                            background-color: var(--primary-color);
                            color: white;
                        }
                        
                        .delete-btn:hover {
                            background-color: #c0392b;
                        }
                        
                        .delete-btn:disabled {
                            background-color: #e0a7a1;
                            cursor: not-allowed;
                        }
                        
                        .confirmation-step {
                            display: none;
                        }
                        
                        .confirmation-step.active {
                            display: block;
                        }
                        
                        .password-field {
                            margin-top: 20px;
                        }

                        @media (max-width: 600px) {
                            .delete-account-container {
                                width: 95%;
                                padding: 20px;
                            }
                            
                            .actions {
                                flex-direction: column;
                            }
                            
                            button {
                                width: 100%;
                            }
                        }
                    </style>
                    
                    <div class="modal-overlay">
                        <div class="delete-account-container">
                            <button class="close-btn" id="closeModalBtn">&times;</button>
                            <h2>Eliminar minha conta</h2>
                            
                            <div class="warning-message">
                                <strong>Atenção:</strong> Esta ação é irreversível. Ao eliminar sua conta, todos os seus dados serão removidos permanentemente e não poderá recuperá-los.
                            </div>
                            
                            <div id="feedbackStep" class="form-group">
                                <label>Por que está a eliminar sua conta?</label>
                                <select id="reasonSelect">
                                    <option value="">Selecione o principal motivo...</option>
                                    <option value="privacidade">Preocupações com privacidade</option>
                                    <option value="usabilidade">Dificuldade em usar a aplicação</option>
                                    <option value="funcionalidades">Falta de funcionalidades úteis</option>
                                    <option value="desempenho">Problemas de desempenho/erros</option>
                                    <option value="atendimento">Mau atendimento ao cliente</option>
                                    <option value="alternativa">Encontrei um serviço melhor</option>
                                    <option value="outro">Outro motivo</option>
                                </select>
                            </div>
                            
                            <div id="otherReasonField" class="form-group" style="display: none;">
                                <label>Por favor, especifique o motivo:</label>
                                <textarea id="otherReasonText"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label>O que poderíamos ter feito melhor?</label>
                                <div class="checkbox-group">
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarUsabilidade" value="usabilidade">
                                        <label for="melhorarUsabilidade">Melhorar a usabilidade da aplicação</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarFuncionalidades" value="funcionalidades">
                                        <label for="melhorarFuncionalidades">Adicionar mais funcionalidades</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarDesempenho" value="desempenho">
                                        <label for="melhorarDesempenho">Otimizar o desempenho</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarSuporte" value="suporte">
                                        <label for="melhorarSuporte">Melhorar o atendimento ao cliente</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarPrivacidade" value="privacidade">
                                        <label for="melhorarPrivacidade">Melhorar as políticas de privacidade</label>
                                    </div>
                                    <div class="checkbox-item">
                                        <input type="checkbox" id="melhorarOutro" value="outro">
                                        <label for="melhorarOutro">Outro</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Gostaria de deixar algum comentário adicional?</label>
                                <textarea id="additionalFeedback"></textarea>
                            </div>
                            
                            <div class="actions">
                                <button id="cancelBtn" class="cancel-btn">Cancelar</button>
                                <button id="continueBtn" class="delete-btn">Continuar</button>
                            </div>
                            
                            <div id="confirmationStep" class="confirmation-step">
                                <div class="warning-message">
                                    <strong>Confirmação final:</strong> Está prestes a eliminar permanentemente sua conta e todos os dados associados. Esta ação não pode ser desfeita.
                                </div>
                                
                                <div class="form-group password-field">
                                    <label for="password">Por favor, insira sua senha para confirmar:</label>
                                    <input type="password" id="password" placeholder="Sua senha">
                                </div>
                                
                                <div class="form-group">
                                    <label class="checkbox-item">
                                        <input type="checkbox" id="confirmDelete">
                                        Compreendo que todos os meus dados serão permanentemente removidos e não poderão ser recuperados.
                                    </label>
                                </div>
                                
                                <div class="actions">
                                    <button id="backBtn" class="cancel-btn">Voltar</button>
                                    <button id="confirmDeleteBtn" class="delete-btn" disabled>Eliminar minha conta permanentemente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }

            connectedCallback() {
                this.modal = this.shadowRoot.querySelector('.modal-overlay');
                const reasonSelect = this.shadowRoot.getElementById('reasonSelect');
                const otherReasonField = this.shadowRoot.getElementById('otherReasonField');
                const continueBtn = this.shadowRoot.getElementById('continueBtn');
                const cancelBtn = this.shadowRoot.getElementById('cancelBtn');
                const closeModalBtn = this.shadowRoot.getElementById('closeModalBtn');
                const confirmationStep = this.shadowRoot.getElementById('confirmationStep');
                const feedbackStep = this.shadowRoot.getElementById('feedbackStep');
                const backBtn = this.shadowRoot.getElementById('backBtn');
                const confirmDeleteBtn = this.shadowRoot.getElementById('confirmDeleteBtn');
                const confirmDeleteCheckbox = this.shadowRoot.getElementById('confirmDelete');
                const passwordField = this.shadowRoot.getElementById('password');

                // Mostrar campo de texto quando "Outro motivo" é selecionado
                reasonSelect.addEventListener('change', function() {
                    otherReasonField.style.display = this.value === 'outro' ? 'block' : 'none';
                });

                // Ir para etapa de confirmação
                continueBtn.addEventListener('click', () => {
                    if (!reasonSelect.value) {
                        this.showError('Por favor, selecione o motivo principal para eliminar sua conta.');
                        return;
                    }
                    
                    feedbackStep.style.display = 'none';
                    continueBtn.style.display = 'none';
                    confirmationStep.classList.add('active');
                });

                // Voltar para etapa de feedback
                backBtn.addEventListener('click', () => {
                    confirmationStep.classList.remove('active');
                    feedbackStep.style.display = 'block';
                    continueBtn.style.display = 'inline-block';
                });

                // Habilitar botão de eliminação quando o checkbox estiver marcado
                confirmDeleteCheckbox.addEventListener('change', function() {
                    confirmDeleteBtn.disabled = !this.checked;
                });

                // Fechar modal ao clicar no botão de cancelar
                cancelBtn.addEventListener('click', () => this.closeWithConfirmation());

                // Fechar modal ao clicar no botão X
                closeModalBtn.addEventListener('click', () => this.closeWithConfirmation());

                // Fechar modal ao clicar fora do conteúdo
                this.modal.addEventListener('click', (e) => {
                    if (e.target === this.modal) {
                        this.closeWithConfirmation();
                    }
                });

                // Simular ação de eliminação
                confirmDeleteBtn.addEventListener('click', () => {
                    if (!passwordField.value) {
                        this.showError('Por favor, insira sua senha para confirmar.');
                        return;
                    }
                    
                    const deleteData = this.collectFormData();
                    console.log('Dados de eliminação de conta:', deleteData);
                    
                    this.dispatchEvent(new CustomEvent('account-deletion-request', {
                        detail: deleteData,
                        bubbles: true,
                        composed: true
                    }));
                    
                    this.close();
                });

                // Fechar com ESC
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                        this.closeWithConfirmation();
                    }
                });
            }

            collectFormData() {
                const reasonSelect = this.shadowRoot.getElementById('reasonSelect');
                const deleteData = {
                    motivo: reasonSelect.value,
                    motivoOutro: this.shadowRoot.getElementById('otherReasonText').value,
                    melhorias: [],
                    comentariosAdicionais: this.shadowRoot.getElementById('additionalFeedback').value,
                    dataHora: new Date().toISOString()
                };
                
                this.shadowRoot.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(checkbox => {
                    deleteData.melhorias.push(checkbox.value);
                });
                
                return deleteData;
            }

            showError(message) {
                notificacao.sms(message,1);
            }

            closeWithConfirmation() {
                if (this.hasFormData()) {
                    if (confirm('Tem certeza que deseja cancelar? Os seus dados não serão guardados.')) {
                        this.close();
                    }
                } else {
                    this.close();
                }
            }

            hasFormData() {
                const reasonSelect = this.shadowRoot.getElementById('reasonSelect');
                const otherReasonText = this.shadowRoot.getElementById('otherReasonText');
                const additionalFeedback = this.shadowRoot.getElementById('additionalFeedback');
                
                return reasonSelect.value || 
                       otherReasonText.value || 
                       additionalFeedback.value || 
                       this.shadowRoot.querySelector('.checkbox-group input[type="checkbox"]:checked');
            }

            open() {
                this.modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                this.resetForm();
            }

            close() {
                this.modal.classList.remove('active');
                document.body.style.overflow = '';
            }

            resetForm() {
                this.shadowRoot.getElementById('feedbackStep').style.display = 'block';
                this.shadowRoot.getElementById('continueBtn').style.display = 'inline-block';
                this.shadowRoot.getElementById('confirmationStep').classList.remove('active');
                this.shadowRoot.getElementById('reasonSelect').value = '';
                this.shadowRoot.getElementById('otherReasonText').value = '';
                this.shadowRoot.getElementById('otherReasonField').style.display = 'none';
                this.shadowRoot.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach(cb => cb.checked = false);
                this.shadowRoot.getElementById('additionalFeedback').value = '';
                this.shadowRoot.getElementById('password').value = '';
                this.shadowRoot.getElementById('confirmDelete').checked = false;
                this.shadowRoot.getElementById('confirmDeleteBtn').disabled = true;
            }
        }

        // Registrar o Web Component
        customElements.define('delete-account-modal', DeleteAccountModal);

        

        // Exemplo de como capturar os dados de eliminação
        document.addEventListener('account-deletion-request', (e) => {
            //notificacao.sms(`Conta marcada para eliminação. Motivo: ${e.detail.motivo}`,1);
            loader.abrir();
            var password = document.querySelector("delete-account-modal").shadowRoot.querySelector("#password").value;
            var token = localStorage.getItem("token");
            var dado = { dados: JSON.stringify(e.detail), token: token, passe: password};
            $.post((window._api)+"/Conta/apagar.php",dado).done(function(dados){
                console.log(dados);
                var obj = JSON.parse(dados);
                
                if(obj.ok){
                    localStorage.clear();
                    location.reload();
                }else{
                    notificacao.sms(obj.payload, 1);
                }
                
            }).always(function(always){
                loader.fechar();
            })
            
            //console.log('Dados recebidos para eliminação:', e.detail, password, token);
            
        });