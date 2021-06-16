use serde::{Serialize, Deserialize};
use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// pub struct Col {
//     pub prim: String,
//     pub placed: Vec<u32>,
// }

// #[wasm_bindgen]
// pub struct Layout {
//     pub col: Vec<Col>,
// }

// #[wasm_bindgen]
// pub fn place_program(_: &str) -> Layout {
//     let c0 = Col { prim: "dsp".to_string(), placed: vec![0, 0, 1, 0]};
//     let c1 = Col { prim: "lut".to_string(), placed: vec![0, 1, 0, 1, 0, 0, 0, 0, 0, 0]};
//     Layout { col: vec![c0, c1] }
// }

#[derive(Serialize, Deserialize)]
pub struct Col {
    pub prim: String,
}

#[wasm_bindgen]
pub fn greet(_: &str) -> JsValue {
    let c = Col { prim: String::from("dsp") };
    JsValue::from_serde(&c).unwrap()
}
