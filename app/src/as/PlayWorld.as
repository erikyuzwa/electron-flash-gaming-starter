
package {

    import flash.events.*;
    import flash.external.ExternalInterface;
    import flash.system.Capabilities;

    import net.flashpunk.World;
    import net.flashpunk.Sfx;
    import net.flashpunk.FP;
    import net.flashpunk.Entity;
    import net.flashpunk.graphics.Text;


    public class PlayWorld extends World {

        [Embed(source = 'assets/audio/u7-fellowship-theme.mp3')]
        private const BGM:Class;

        public var bgm_track:Sfx;
        public var text_label:Text;

        public function PlayWorld() {

            this.bgm_track = new Sfx(BGM);

            this.text_label = new Text("The reports of my death are greatly exaggerated.");
            
        }

        override public function begin(): void {

            this.bgm_track.play();

            var textEntity:Entity = new Entity(0, 0, this.text_label);
            textEntity.x = (FP.width / 2) - (this.text_label.width / 2);
            textEntity.y = (FP.height / 2) - (this.text_label.height / 2);
            this.add(textEntity);
          
        }

    }


}
