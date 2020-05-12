    
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h2>Sucursales</h2>
                            <div class="con-suc">        
                                <h3>Iztapalapa</h3>                    
                                <p>CMIG, República del Salvador 12, loc 4 Planta Alta , Col. Centro, Del. Cuauhtémoc CDMX</p>
                                <a href="">
                                    <i class="fas fa-phone"></i>5518 7329
                                </a>
                                <a href="" class=""><i class="fas fa-envelope"></i>ventas@pcmig.com.mx</a>
                                <span>Horario: Lunes – Sábado: 10:00-19:00 <br />Domingo: cerrado</span>
                            </div>
                            <div class="con-suc">    
                                <h3>Estado de México</h3>                    
                                <p>CMIG, República del Salvador 12, loc 4 Planta Alta , Col. Centro, Del. Cuauhtémoc CDMX</p>
                                <a href="">
                                <i class="fas fa-phone"></i>5518 7329
                                </a>
                                <a href="" class=""><i class="fas fa-envelope"></i>ventas@pcmig.com.mx</a>
                                <span>Horario: Lunes – Sábado: 10:00-19:00 <br />Domingo: cerrado</span>
                            </div>
                            <div class="con-suc">     
                                <h3>Azcapotzalco</h3>                    
                                <p>CMIG, República del Salvador 12, loc 4 Planta Alta , Col. Centro, Del. Cuauhtémoc CDMX</p>
                                <a href="">
                                <i class="fas fa-phone"></i>5518 7329
                                </a>
                                <a href="" class=""><i class="fas fa-envelope"></i>ventas@pcmig.com.mx</a>
                                <span>Horario: Lunes – Sábado: 10:00-19:00 <br />Domingo: cerrado</span>
                            </div>
                        </div>
                        <div class="col-md-4"> 
                            <h2>Páginas</h2>    
                                <?php
                                    wp_nav_menu(
                                        array(
                                            'theme_location' => 'top-menu'
                                        )
                                    )
                                ?>                                                       
                                <div class="con-redes">
                                    <h2>Redes sociales</h2>
                                    <div class="redes">
                                        <a href=""><i class="fab fa-twitter"></i></a>
                                        <a href=""><i class="fab fa-facebook-f"></i></a>
                                        <a href=""><i class="fab fa-whatsapp"></i></a>
                                        <a href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>                   

                        </div>
                        <div class="col-md-4">
                            <h2>Contactanos</h2>
                            <form action="" method="POST" id="form-contact-footer">
                                <div class="form-group">
                                    <label for="nombre">Nombre Completo</label>
                                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Fulano">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Correo Electronico</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" name="correo" placeholder="ejemplo@ejemplo.com">
                                </div>
                                <div class="form-group">
                                    <label for="numero">Numero de telefono</label>
                                    <input type="text" class="form-control" id="numero" name="numero" placeholder="5518548798">
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Agrega tus comentarios</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="mensaje" pattern="/^[\WA-z a-z A-Z]{10,100}$/"></textarea>
                                </div>     
                                <div class="form-btn">                                
                                    <button class="btn btn-primary" disabled="true" id="btn-submit-form">Enviar</button>                              
                                </div>
                            </form>  
                            <div class="txt-form-alerts">
                                <p>Si quieres más información llena el formulario.</p>
                            </div>                 
                        </div>
                    </div>
                </div>
            </footer>
        <?php wp_footer();?>
    </body>
</html>