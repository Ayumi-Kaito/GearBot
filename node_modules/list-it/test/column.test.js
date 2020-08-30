"use strict";
const assert = require('chai').assert;
const Column = require("../lib/column.js");
const DataCell = require("../lib/data-cell.js");
describe("Column", () => {
    describe("constructor", ()=>{
        it("should make the hasHeader() method returns false", ()=>{
            const column = new Column();
            assert.isFalse(column.hasHeader());
        });
    });
    describe("#setHeader", ()=>{
        it("should make the hasHeader() method true", ()=>{
            const column = new Column();
            column.setHeader("HEADER");
            assert.isTrue(column.hasHeader());
        });
        it("should make the hasHeader() method false, when set null", ()=>{
            const column = new Column();
            column.setHeader("HEADER");
            assert.isTrue(column.hasHeader());
            column.setHeader(null);
            assert.isFalse(column.hasHeader());
        });
    });
    describe("#formatColumnHeader", ()=>{
        it("should returns null when header is not set", ()=>{
            const column = new Column();
            assert.isNull(column.formatColumnHeader());
        });
        it("should returns the header", ()=>{
            const column = new Column();
            column.setHeader("01234");
            column.updateWidth();
            assert.equal(column.formatColumnHeader(), "01234");
        });
        it("should not truncate by the textWidth when header is longer than textWidth", ()=>{
            const column = new Column();
            column.setHeader("HEADER");
            column.setTextWidth(3);

            const cell0 = new DataCell();
            cell0.setData("ABCD");
            column.setCellAt(0, cell0);

            const cell1 = new DataCell();
            cell1.setData("EFGH");
            column.setCellAt(1, cell1);

            const cell2 = new DataCell();
            cell2.setData("IJKL");
            column.setCellAt(2, cell2);

            column.updateWidth();
            assert.equal(column.formatColumnHeader(), "HEADER");
        });
        it("should not truncate by the textWidth when header is longer than textWidth", ()=>{
            const column = new Column();
            column.setHeader("HEADER");
            column.setTextWidth(3);

            const cell0 = new DataCell();
            cell0.setData("ABCDEFG");
            column.setCellAt(0, cell0);

            const cell1 = new DataCell();
            cell1.setData("HIJKLMN");
            column.setCellAt(1, cell1);

            const cell2 = new DataCell();
            cell2.setData("OPQRSTU");
            column.setCellAt(2, cell2);

            column.updateWidth();
            assert.equal(column.formatColumnHeader(), "HEADER ");
        });
    });
    describe("updateWidth", ()=>{
        it("should update the width as header length", ()=>{
            const column = new Column();
            column.setHeader("HEADER");
            column.setTextWidth(3);

            const cell0 = new DataCell();
            cell0.setData("ABCD");
            column.setCellAt(0, cell0);

            const cell1 = new DataCell();
            cell1.setData("EFGH");
            column.setCellAt(1, cell1);

            const cell2 = new DataCell();
            cell2.setData("IJKL");
            column.setCellAt(2, cell2);

            column.updateWidth();
            assert.equal(column.getWidth(), 6);
        })
    });
});
