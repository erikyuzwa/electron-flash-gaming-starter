
package {

    import flash.events.*;
    import flash.external.ExternalInterface;
    import flash.system.Capabilities;

    import net.flashpunk.Engine;
    import net.flashpunk.FP;

    public class Main extends Engine {

        public function Main() {

            super(800, 600, 60, false);
            
        }

        override public function init(): void {

            FP.world = new PlayWorld();
          
        }

    }


}
