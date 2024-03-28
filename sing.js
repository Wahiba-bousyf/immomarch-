import React from "react";
import "./sign.css";
export default function Login(){
    return(
    <>
        <img src="Vector.png" alt=""/>
        <div>
        <section class="ban">
                <div class="form-box">
                    <div class="item">
                        <h1>log<span class="i">i</span>n</h1>
                        <table>
                            <tr>
                                <td><label>email</label></td>
                                <td><label>Nom</label></td>
                            </tr>
                            <tr className="input-box">
                                <td><input type="text" placeholder="wahibabousyf@gmail.com"/></td>
                                <td><input type="text" placeholder="wahiba bousyf"/></td>
                            </tr>
                            <tr>
                                <td><label>mot de passe</label></td>
                                <td><label>confirmation de mot passe</label></td>
                            </tr>
                            <tr className="input-box">
                                <td><input type="text"/></td>
                                <td><input  type="text"/></td>
                            </tr>
                        </table>
                        <p class="int">Forget Password ?</p><br/>
                        <span className="p">
                        <input type="submit" class='inpt1' value="Sing In"/><br/>
                        <p class="sin">Sin Up? <span class="or">Or continue with</span></p><br/>
                        <div class="inpt2">
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="google.png" class="im" alt=""/></button>
                        <button type="submit" class="inpt4" value="Log in" ><span>Login in</span><img src="facebook (3).png" class="im" alt=""/></button>
                        </div>
                        </span>
                    </div>
                </div>
            </section>
            </div>
            </>
    )
}