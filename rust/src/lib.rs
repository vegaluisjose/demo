use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

const COL: [&str; 60] = [
    "lutl", "lutm", "lutl", "bram", "lutl", "lutm", "dsp", "lutm", "lutl", "lutl", "lutl", "lutm",
    "lutl", "lutl", "lutl", "bram", "lutl", "lutm", "lutl", "lutm", "lutl", "bram", "lutl", "lutm",
    "dsp", "lutm", "lutl", "lutl", "lutl", "lutm", "lutl", "lutl", "lutl", "lutm", "dsp", "lutm",
    "lutl", "lutm", "lutl", "bram", "lutl", "lutm", "lutl", "bram", "lutl", "lutm", "lutl", "lutm",
    "dsp", "lutm", "lutl", "lutm", "dsp", "lutm", "lutl", "lutm", "lutl", "bram", "lutl", "lutm",
];

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
pub fn init() -> JsValue {
    let mut col: Vec<Col> = Vec::new();
    for c in COL.iter() {
        match *c {
            "lutl" | "lutm" => col.push(Col {
                prim: c.to_string(),
                elem: vec![0.; 40],
            }),
            "dsp" | "bram" => col.push(Col {
                prim: c.to_string(),
                elem: vec![0.; 16],
            }),
            _ => (),
        };
    }
    let layout = Layout { col };
    JsValue::from_serde(&layout).unwrap()
}

#[wasm_bindgen]
pub fn random() -> JsValue {
    let mut col: Vec<Col> = Vec::new();
    for c in COL.iter() {
        match *c {
            "lutl" | "lutm" => {
                let mut buf = [0u8; 40];
                getrandom::getrandom(&mut buf).unwrap();
                let elem: Vec<f32> = buf.iter().map(|b| (b & 1) as f32).collect();
                col.push(Col {
                    prim: c.to_string(),
                    elem,
                });
            }
            "dsp" | "bram" => {
                let mut buf = [0u8; 16];
                getrandom::getrandom(&mut buf).unwrap();
                let elem: Vec<f32> = buf.iter().map(|b| (b & 1) as f32).collect();
                col.push(Col {
                    prim: c.to_string(),
                    elem,
                });
            }
            _ => (),
        };
    }
    let layout = Layout { col };
    JsValue::from_serde(&layout).unwrap()
}
