use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[derive(Serialize, Deserialize)]
pub struct Col {
    pub prim: String,
    pub elem: Vec<f32>,
}

#[derive(Serialize, Deserialize)]
pub struct Layout {
    pub col: Vec<Col>,
}

#[wasm_bindgen]
pub fn greet(prim: &str) -> JsValue {
    let c0 = Col {
        prim: String::from(prim),
        elem: vec![1.0, 0.0, 1.0],
    };
    let c1 = Col {
        prim: String::from(prim),
        elem: vec![0.0, 1.0, 0.0],
    };
    let layout = Layout { col: vec![c0, c1] };
    JsValue::from_serde(&layout).unwrap()
}
