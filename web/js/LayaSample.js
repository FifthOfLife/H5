//初始化引擎
Laya.init(Laya.Browser.width, Laya.Browser.height);
if (Laya.Media.supported() === false) {
    alert("当前浏览器不支持");
}
else {
    showMessage();
    var options = {
        audio: true,
        video: {
            facingMode: { exact: "environment" },    // 后置摄像头，默认值就是，不设至也可以。
            width: Laya.stage.width,
            height: Laya.stage.height
        }
    };
    Laya.Media.getMedia(options, Laya.Handler.create(this, onSuccess), Laya.Handler.create(this, onError));
    console.log("123456");
}
function showMessage() {
    var tex = new Laya.Text();
    Laya.stage.addChild(tex);
    tex.text = "单击舞台播放和暂停";
    tex.color = "#ffffff";
    tex.fontSize = 100;
    tex.valign = "middle";
    tex.align = "center";
    tex.size(Laya.stage.width, Laya.stage.height);
}
function onSuccess(url) {
    this.video = new Laya.Video(Laya.stage.width, Laya.stage.height);
    this.video.load(url);
    Laya.stage.addChild(this.video);
    Laya.stage.on("click", this, onStageClick);
}
function onError(error) {
    console.log("error");
    alert(error.message);
}
function onStageClick() {
    //切换播放和暂停
    if (!this.video.paused) {
        this.video.pause();
        console.log("pause");
    }
    else {
        this.video.play();
        console.log("play");
    }
}