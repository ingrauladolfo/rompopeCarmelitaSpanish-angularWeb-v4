import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import "../../../../node_modules/jquery/dist/jquery.min.js"
import Swal from 'sweetalert2';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_eklcu3i', 'template_xxwviu8', e.target as HTMLFormElement  , 'user_gSt0Er0UW60hh4JpUa5LP' )
      .then((result: EmailJSResponseStatus) => {
        Swal.fire(
          result.text,
          'Tu mensaje ha sido enviado satisfactoriamente',
          'success'
        )
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: error.text,
          text: 'Inténtalo de nuevo'
        })
      });
  }

  ngOnInit():void{
    $(document).ready(function () {

      function showPopup(){
          $('.pop-up').addClass('show');
          $('.pop-up-wrap').addClass('show');
      }
  
      $("#close").click(function(){
          $('.pop-up').removeClass('show');
          $('.pop-up-wrap').removeClass('show');
      });
  
      $(".btn-abrir").click(showPopup);
  
      setTimeout(showPopup, 4000);
  
  }); 
  }

}
