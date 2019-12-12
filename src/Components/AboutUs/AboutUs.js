import React, {Fragment} from 'react';
import heroImg from '../../img/home/about-us/hero.jpg';



const AboutUs = () => {


    return (
        <Fragment>
            <div className = "container-fluid">
                <div className = "row">
                    <img className = "w-100" src = {heroImg} alt = "colaborators" />
                </div>
            </div>
            <div className = "container">
                <div className = "row flex-column text-center p-5">
                    <h1 className = "main-title-color">Saznajte više</h1>
                    <h3 className = "body-text-color">Specijalistička pedijatrijska ordinacija Dar Medica</h3>
                </div>
                <div className = "my-5 body-text-color ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla leo ipsum, semper at pretium et, facilisis non enim. Curabitur euismod erat varius, tincidunt diam ornare, suscipit nibh. Duis mollis sit amet risus id euismod. Aliquam ultrices pretium quam, id viverra tellus scelerisque sit amet. Integer vitae pretium massa, eget dignissim nibh. Mauris pellentesque felis sed lectus luctus, nec vestibulum ipsum vulputate. Maecenas sollicitudin lorem id sodales malesuada. Nunc ipsum odio, scelerisque et efficitur sit amet, tristique a sapien. In facilisis ultricies orci vitae vulputate. Duis placerat lorem id libero porttitor porttitor. Etiam varius rhoncus elit a maximus. Duis eu finibus tellus. In hac habitasse platea dictumst.</p>

                        <p>Integer eros velit, tincidunt et tellus et, ultrices dignissim dui. Ut aliquam ac ipsum quis congue. Nulla eu metus nec mauris vehicula gravida quis a dolor. Sed augue urna, lacinia pulvinar nunc ut, varius sodales dui. Vivamus placerat laoreet tortor a mollis. Fusce sed lacus vel ex commodo ullamcorper sagittis in tortor. In hac habitasse platea dictumst. Pellentesque sed felis eros. Cras elementum nibh mi. Aliquam dignissim facilisis lectus, id commodo massa. Curabitur luctus libero lorem, non mollis ipsum rhoncus sed. Phasellus accumsan volutpat feugiat.</p>

                        <p>Phasellus non nisi eros. Donec sit amet magna a turpis tempor viverra a a eros. Etiam odio mauris, tempus ac sollicitudin nec, interdum vel mi. Aliquam in ipsum vel risus faucibus porta. Aenean pellentesque rutrum diam non condimentum. Pellentesque varius a nulla quis ultrices. Morbi venenatis velit nec ornare consectetur. Phasellus molestie faucibus dui vestibulum ullamcorper.</p>

                        <p>Vivamus ut nunc vitae diam interdum ultrices. Integer mattis, neque ut tristique euismod, magna ligula sollicitudin dolor, vel ultrices quam dolor quis eros. Nam ornare augue sed massa feugiat, nec rhoncus tellus finibus. Pellentesque sagittis turpis sit amet sem pharetra, quis suscipit libero dapibus. Nunc iaculis, lorem id interdum efficitur, nulla orci rutrum ex, ut pulvinar ante eros ac risus. Vivamus tincidunt quis enim eu commodo. Quisque venenatis diam ac elit lobortis pellentesque. Vestibulum dignissim, urna ac commodo sollicitudin, nisi lacus euismod justo, eget convallis ante velit et magna. Praesent pretium odio in ligula blandit, sed pulvinar justo consequat. Ut dui ex, faucibus varius lectus id, efficitur vestibulum mi. Nulla a mollis leo. Sed at mattis ipsum, nec volutpat augue. Donec consequat sapien eget mi tempus mattis.</p>

                        <p>Nulla ut ullamcorper ligula. Duis nec felis sed mauris accumsan pellentesque. Curabitur viverra mi id laoreet feugiat. Suspendisse at vestibulum augue. Curabitur varius nulla at sapien tincidunt scelerisque. Nam lacinia tortor eu purus eleifend, id dignissim enim fringilla. Sed vehicula nulla vehicula, fermentum est et, vestibulum justo. In interdum finibus nunc vitae convallis. In maximus bibendum accumsan. Vivamus sit amet scelerisque felis. Sed commodo consequat eros, ut aliquet turpis lacinia viverra. Proin mi dolor, bibendum ac diam a, commodo scelerisque libero. Suspendisse quis massa ultricies, aliquam enim sed, consectetur arcu. Aenean ac tempor odio.</p>
                    </div>
            </div>   
        </Fragment>
    )
}

export default AboutUs;