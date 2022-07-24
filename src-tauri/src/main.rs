#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// the payload type must implement `Serialize` and `Clone`.
// #[derive(Clone, serde::Serialize)]
// struct Payload {
//   message: String,
// }

// #[tauri::command]
// async fn open_new_item(handle: tauri::AppHandle) {
//   let item_window = tauri::WindowBuilder::new(
//     &handle,
//     "new-item", /* the unique window label */
//     tauri::WindowUrl::App("products/new".parse().unwrap())
//   ).build().unwrap();
// }

fn main() {
  let context = tauri::generate_context!();
  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![open_new_item])
    .menu(tauri::Menu::os_default(&context.package_info().name))
    .run(context)
    .expect("error while running tauri application");
}
