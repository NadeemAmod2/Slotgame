// (function update_loading_progress() {
//
// 	if (!MRAID.TrackedEvents['Loader Initialized']) return Broadcast.on('Loader Initialized', () => {
//
// 		update_loading_progress();
//
// 	});
//
// 	//Здесь можно создать новые элементы для экрана загрузки
//
// 	function apply_styles() {
//
// 		//Здесь можно установить новые стили новым и старым элементам экрана загрузки, в том числе и зависящие от размеров экрана
// 		let old_load_progress = Loader.updateLoadProgress;
// 		let precents = 0;
// 		Loader.updateLoadProgress = function(progress) {
// 			precents = Math.round(progress * 100);
// 			if(precents > 100)
// 			    precents = 100;
// 			Loader.loadProgressEl.innerHTML = "<a style='font-weight: bold; font-size: 20px'>LOADING ... " + precents + "%</a>";
// 			if(precents == 100)
// 			    return;
//
// 			old_load_progress.call(Loader, progress);
// 		};
//
// 	}
//
// 	Broadcast.on("MRAID Resize", apply_styles, "loader");
//
// 	apply_styles();
//
// })();
//
