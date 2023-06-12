<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    audio: [{
        name: '君に吹く風',
        artist: '下川美娜',
        url: '君に吹く風.mp3',
        cover: 'https://pic.imgdb.cn/item/64395b5c0d2dde577725723e.jpg '
    }]
});