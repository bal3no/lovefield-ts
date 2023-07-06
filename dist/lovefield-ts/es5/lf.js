"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.TableBuilder = exports.Capability = exports.fn = exports.op = exports.Binder = exports.bind = exports.options = exports.ErrorCode = exports.TransactionType = exports.Type = exports.Order = exports.DataStoreType = exports.ConstraintTiming = exports.ConstraintAction = void 0;
var ConstraintAction;
(function (ConstraintAction) {
    ConstraintAction[ConstraintAction["RESTRICT"] = 0] = "RESTRICT";
    ConstraintAction[ConstraintAction["CASCADE"] = 1] = "CASCADE";
})(ConstraintAction = exports.ConstraintAction || (exports.ConstraintAction = {}));
var ConstraintTiming;
(function (ConstraintTiming) {
    ConstraintTiming[ConstraintTiming["IMMEDIATE"] = 0] = "IMMEDIATE";
    ConstraintTiming[ConstraintTiming["DEFERRABLE"] = 1] = "DEFERRABLE";
})(ConstraintTiming = exports.ConstraintTiming || (exports.ConstraintTiming = {}));
var DataStoreType;
(function (DataStoreType) {
    DataStoreType[DataStoreType["INDEXED_DB"] = 0] = "INDEXED_DB";
    DataStoreType[DataStoreType["MEMORY"] = 1] = "MEMORY";
    DataStoreType[DataStoreType["LOCAL_STORAGE"] = 2] = "LOCAL_STORAGE";
    DataStoreType[DataStoreType["FIREBASE"] = 3] = "FIREBASE";
    DataStoreType[DataStoreType["WEB_SQL"] = 4] = "WEB_SQL";
    DataStoreType[DataStoreType["OBSERVABLE_STORE"] = 5] = "OBSERVABLE_STORE";
})(DataStoreType = exports.DataStoreType || (exports.DataStoreType = {}));
var Order;
(function (Order) {
    Order[Order["DESC"] = 0] = "DESC";
    Order[Order["ASC"] = 1] = "ASC";
})(Order = exports.Order || (exports.Order = {}));
var Type;
(function (Type) {
    Type[Type["ARRAY_BUFFER"] = 0] = "ARRAY_BUFFER";
    Type[Type["BOOLEAN"] = 1] = "BOOLEAN";
    Type[Type["DATE_TIME"] = 2] = "DATE_TIME";
    Type[Type["INTEGER"] = 3] = "INTEGER";
    Type[Type["NUMBER"] = 4] = "NUMBER";
    Type[Type["STRING"] = 5] = "STRING";
    Type[Type["OBJECT"] = 6] = "OBJECT";
})(Type = exports.Type || (exports.Type = {}));
var DEFAULT_VALUES = new Map([
    [Type.ARRAY_BUFFER, null],
    [Type.BOOLEAN, false],
    [Type.DATE_TIME, Object.freeze(new Date(0))],
    [Type.INTEGER, 0],
    [Type.NUMBER, 0],
    [Type.STRING, ''],
    [Type.OBJECT, null],
]);
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["READ_ONLY"] = 0] = "READ_ONLY";
    TransactionType[TransactionType["READ_WRITE"] = 1] = "READ_WRITE";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["SYSTEM_ERROR"] = 0] = "SYSTEM_ERROR";
    ErrorCode[ErrorCode["VERSION_MISMATCH"] = 1] = "VERSION_MISMATCH";
    ErrorCode[ErrorCode["CONNECTION_CLOSED"] = 2] = "CONNECTION_CLOSED";
    ErrorCode[ErrorCode["TIMEOUT"] = 3] = "TIMEOUT";
    ErrorCode[ErrorCode["OPERATION_BLOCKED"] = 4] = "OPERATION_BLOCKED";
    ErrorCode[ErrorCode["QUOTA_EXCEEDED"] = 5] = "QUOTA_EXCEEDED";
    ErrorCode[ErrorCode["TOO_MANY_ROWS"] = 6] = "TOO_MANY_ROWS";
    ErrorCode[ErrorCode["SERVICE_NOT_FOUND"] = 7] = "SERVICE_NOT_FOUND";
    ErrorCode[ErrorCode["UNKNOWN_PLAN_NODE"] = 8] = "UNKNOWN_PLAN_NODE";
    ErrorCode[ErrorCode["DATA_ERROR"] = 100] = "DATA_ERROR";
    ErrorCode[ErrorCode["TABLE_NOT_FOUND"] = 101] = "TABLE_NOT_FOUND";
    ErrorCode[ErrorCode["DATA_CORRUPTION"] = 102] = "DATA_CORRUPTION";
    ErrorCode[ErrorCode["INVALID_ROW_ID"] = 103] = "INVALID_ROW_ID";
    ErrorCode[ErrorCode["INVALID_TX_ACCESS"] = 105] = "INVALID_TX_ACCESS";
    ErrorCode[ErrorCode["OUT_OF_SCOPE"] = 106] = "OUT_OF_SCOPE";
    ErrorCode[ErrorCode["INVALID_TX_STATE"] = 107] = "INVALID_TX_STATE";
    ErrorCode[ErrorCode["INCOMPATIBLE_DB"] = 108] = "INCOMPATIBLE_DB";
    ErrorCode[ErrorCode["ROW_ID_EXISTED"] = 109] = "ROW_ID_EXISTED";
    ErrorCode[ErrorCode["IMPORT_TO_NON_EMPTY_DB"] = 110] = "IMPORT_TO_NON_EMPTY_DB";
    ErrorCode[ErrorCode["DB_MISMATCH"] = 111] = "DB_MISMATCH";
    ErrorCode[ErrorCode["IMPORT_DATA_NOT_FOUND"] = 112] = "IMPORT_DATA_NOT_FOUND";
    ErrorCode[ErrorCode["ALREADY_CONNECTED"] = 113] = "ALREADY_CONNECTED";
    ErrorCode[ErrorCode["CONSTRAINT_ERROR"] = 200] = "CONSTRAINT_ERROR";
    ErrorCode[ErrorCode["DUPLICATE_KEYS"] = 201] = "DUPLICATE_KEYS";
    ErrorCode[ErrorCode["NOT_NULLABLE"] = 202] = "NOT_NULLABLE";
    ErrorCode[ErrorCode["FK_VIOLATION"] = 203] = "FK_VIOLATION";
    ErrorCode[ErrorCode["NOT_SUPPORTED"] = 300] = "NOT_SUPPORTED";
    ErrorCode[ErrorCode["FB_NO_RAW_TX"] = 351] = "FB_NO_RAW_TX";
    ErrorCode[ErrorCode["IDB_NOT_PROVIDED"] = 352] = "IDB_NOT_PROVIDED";
    ErrorCode[ErrorCode["WEBSQL_NOT_PROVIDED"] = 353] = "WEBSQL_NOT_PROVIDED";
    ErrorCode[ErrorCode["CANT_OPEN_WEBSQL_DB"] = 354] = "CANT_OPEN_WEBSQL_DB";
    ErrorCode[ErrorCode["NO_CHANGE_NOTIFICATION"] = 355] = "NO_CHANGE_NOTIFICATION";
    ErrorCode[ErrorCode["NO_WEBSQL_TX"] = 356] = "NO_WEBSQL_TX";
    ErrorCode[ErrorCode["NO_PRED_IN_TOSQL"] = 357] = "NO_PRED_IN_TOSQL";
    ErrorCode[ErrorCode["NOT_IMPL_IN_TOSQL"] = 358] = "NOT_IMPL_IN_TOSQL";
    ErrorCode[ErrorCode["LOCAL_STORAGE_NOT_PROVIDED"] = 359] = "LOCAL_STORAGE_NOT_PROVIDED";
    ErrorCode[ErrorCode["NOT_IMPLEMENTED"] = 360] = "NOT_IMPLEMENTED";
    ErrorCode[ErrorCode["CANT_OPEN_IDB"] = 361] = "CANT_OPEN_IDB";
    ErrorCode[ErrorCode["CANT_READ_IDB"] = 362] = "CANT_READ_IDB";
    ErrorCode[ErrorCode["CANT_LOAD_IDB"] = 363] = "CANT_LOAD_IDB";
    ErrorCode[ErrorCode["SYNTAX_ERROR"] = 500] = "SYNTAX_ERROR";
    ErrorCode[ErrorCode["UNBOUND_VALUE"] = 501] = "UNBOUND_VALUE";
    ErrorCode[ErrorCode["INVALID_NAME"] = 502] = "INVALID_NAME";
    ErrorCode[ErrorCode["NAME_IN_USE"] = 503] = "NAME_IN_USE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_TYPE"] = 504] = "INVALID_AUTO_KEY_TYPE";
    ErrorCode[ErrorCode["INVALID_AUTO_KEY_COLUMN"] = 505] = "INVALID_AUTO_KEY_COLUMN";
    ErrorCode[ErrorCode["IMMEDIATE_EVAL_ONLY"] = 506] = "IMMEDIATE_EVAL_ONLY";
    ErrorCode[ErrorCode["COLUMN_NOT_FOUND"] = 508] = "COLUMN_NOT_FOUND";
    ErrorCode[ErrorCode["COLUMN_NOT_INDEXABLE"] = 509] = "COLUMN_NOT_INDEXABLE";
    ErrorCode[ErrorCode["BIND_ARRAY_OUT_OF_RANGE"] = 510] = "BIND_ARRAY_OUT_OF_RANGE";
    ErrorCode[ErrorCode["CANT_GET_IDB_TABLE"] = 511] = "CANT_GET_IDB_TABLE";
    ErrorCode[ErrorCode["CANT_GET_WEBSQL_TABLE"] = 512] = "CANT_GET_WEBSQL_TABLE";
    ErrorCode[ErrorCode["UNKNOWN_QUERY_CONTEXT"] = 513] = "UNKNOWN_QUERY_CONTEXT";
    ErrorCode[ErrorCode["UNKNOWN_NODE_TYPE"] = 514] = "UNKNOWN_NODE_TYPE";
    ErrorCode[ErrorCode["DUPLICATE_FROM"] = 515] = "DUPLICATE_FROM";
    ErrorCode[ErrorCode["DUPLICATE_WHERE"] = 516] = "DUPLICATE_WHERE";
    ErrorCode[ErrorCode["INVALID_DELETE"] = 517] = "INVALID_DELETE";
    ErrorCode[ErrorCode["INVALID_INSERT"] = 518] = "INVALID_INSERT";
    ErrorCode[ErrorCode["INVALID_INSERT_OR_REPLACE"] = 519] = "INVALID_INSERT_OR_REPLACE";
    ErrorCode[ErrorCode["DUPLICATE_INTO"] = 520] = "DUPLICATE_INTO";
    ErrorCode[ErrorCode["DUPLICATE_VALUES"] = 521] = "DUPLICATE_VALUES";
    ErrorCode[ErrorCode["INVALID_SELECT"] = 522] = "INVALID_SELECT";
    ErrorCode[ErrorCode["UNBOUND_LIMIT_SKIP"] = 523] = "UNBOUND_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_DISTINCT"] = 524] = "INVALID_DISTINCT";
    ErrorCode[ErrorCode["INVALID_GROUPBY"] = 525] = "INVALID_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PROJECTION"] = 526] = "INVALID_PROJECTION";
    ErrorCode[ErrorCode["INVALID_AGGREGATION"] = 527] = "INVALID_AGGREGATION";
    ErrorCode[ErrorCode["DUPLICATE_LIMIT"] = 528] = "DUPLICATE_LIMIT";
    ErrorCode[ErrorCode["DUPLICATE_SKIP"] = 529] = "DUPLICATE_SKIP";
    ErrorCode[ErrorCode["DUPLICATE_GROUPBY"] = 530] = "DUPLICATE_GROUPBY";
    ErrorCode[ErrorCode["NEGATIVE_LIMIT_SKIP"] = 531] = "NEGATIVE_LIMIT_SKIP";
    ErrorCode[ErrorCode["INVALID_UPDATE"] = 532] = "INVALID_UPDATE";
    ErrorCode[ErrorCode["FK_LOOP"] = 533] = "FK_LOOP";
    ErrorCode[ErrorCode["FK_COLUMN_IN_USE"] = 534] = "FK_COLUMN_IN_USE";
    ErrorCode[ErrorCode["SCHEMA_FINALIZED"] = 535] = "SCHEMA_FINALIZED";
    ErrorCode[ErrorCode["INVALID_FK_TABLE"] = 536] = "INVALID_FK_TABLE";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN"] = 537] = "INVALID_FK_COLUMN";
    ErrorCode[ErrorCode["INVALID_FK_COLUMN_TYPE"] = 538] = "INVALID_FK_COLUMN_TYPE";
    ErrorCode[ErrorCode["FK_COLUMN_NONUNIQUE"] = 539] = "FK_COLUMN_NONUNIQUE";
    ErrorCode[ErrorCode["INVALID_FK_REF"] = 540] = "INVALID_FK_REF";
    ErrorCode[ErrorCode["INVALID_OUTER_JOIN"] = 541] = "INVALID_OUTER_JOIN";
    ErrorCode[ErrorCode["MISSING_FROM_BEFORE_JOIN"] = 542] = "MISSING_FROM_BEFORE_JOIN";
    ErrorCode[ErrorCode["PK_CANT_BE_FK"] = 543] = "PK_CANT_BE_FK";
    ErrorCode[ErrorCode["DUPLICATE_PK"] = 544] = "DUPLICATE_PK";
    ErrorCode[ErrorCode["NULLABLE_PK"] = 545] = "NULLABLE_PK";
    ErrorCode[ErrorCode["DUPLICATE_NAME"] = 546] = "DUPLICATE_NAME";
    ErrorCode[ErrorCode["INVALID_WHERE"] = 547] = "INVALID_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_WHERE"] = 548] = "FROM_AFTER_WHERE";
    ErrorCode[ErrorCode["FROM_AFTER_ORDER_GROUPBY"] = 549] = "FROM_AFTER_ORDER_GROUPBY";
    ErrorCode[ErrorCode["INVALID_PREDICATE"] = 550] = "INVALID_PREDICATE";
    ErrorCode[ErrorCode["TEST_ERROR"] = 900] = "TEST_ERROR";
    ErrorCode[ErrorCode["ASSERTION"] = 998] = "ASSERTION";
    ErrorCode[ErrorCode["SIMULATED_ERROR"] = 999] = "SIMULATED_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var Favor;
(function (Favor) {
    Favor[Favor["RHS"] = -1] = "RHS";
    Favor[Favor["TIE"] = 0] = "TIE";
    Favor[Favor["LHS"] = 1] = "LHS";
})(Favor || (Favor = {}));
var TableType;
(function (TableType) {
    TableType[TableType["DATA"] = 0] = "DATA";
    TableType[TableType["INDEX"] = 1] = "INDEX";
})(TableType || (TableType = {}));
var ExecType;
(function (ExecType) {
    ExecType[ExecType["NO_CHILD"] = -1] = "NO_CHILD";
    ExecType[ExecType["ALL"] = 0] = "ALL";
    ExecType[ExecType["FIRST_CHILD"] = 1] = "FIRST_CHILD";
})(ExecType || (ExecType = {}));
var LockType;
(function (LockType) {
    LockType[LockType["EXCLUSIVE"] = 0] = "EXCLUSIVE";
    LockType[LockType["RESERVED_READ_ONLY"] = 1] = "RESERVED_READ_ONLY";
    LockType[LockType["RESERVED_READ_WRITE"] = 2] = "RESERVED_READ_WRITE";
    LockType[LockType["SHARED"] = 3] = "SHARED";
})(LockType || (LockType = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority[TaskPriority["EXPORT_TASK"] = 0] = "EXPORT_TASK";
    TaskPriority[TaskPriority["IMPORT_TASK"] = 0] = "IMPORT_TASK";
    TaskPriority[TaskPriority["OBSERVER_QUERY_TASK"] = 0] = "OBSERVER_QUERY_TASK";
    TaskPriority[TaskPriority["EXTERNAL_CHANGE_TASK"] = 1] = "EXTERNAL_CHANGE_TASK";
    TaskPriority[TaskPriority["USER_QUERY_TASK"] = 2] = "USER_QUERY_TASK";
    TaskPriority[TaskPriority["TRANSACTION_TASK"] = 2] = "TRANSACTION_TASK";
})(TaskPriority || (TaskPriority = {}));
var FnType;
(function (FnType) {
    FnType["AVG"] = "AVG";
    FnType["COUNT"] = "COUNT";
    FnType["DISTINCT"] = "DISTINCT";
    FnType["GEOMEAN"] = "GEOMEAN";
    FnType["MAX"] = "MAX";
    FnType["MIN"] = "MIN";
    FnType["STDDEV"] = "STDDEV";
    FnType["SUM"] = "SUM";
})(FnType || (FnType = {}));
var Operator;
(function (Operator) {
    Operator["AND"] = "and";
    Operator["OR"] = "or";
})(Operator || (Operator = {}));
var UnboundKey = (function () {
    function UnboundKey() {
    }
    return UnboundKey;
}());
var SingleKeyRange = (function () {
    function SingleKeyRange(from, to, excludeLower, excludeUpper) {
        this.from = from;
        this.to = to;
        this.excludeLower = !SingleKeyRange.isUnbound(this.from)
            ? excludeLower
            : false;
        this.excludeUpper = !SingleKeyRange.isUnbound(this.to)
            ? excludeUpper
            : false;
    }
    SingleKeyRange.isUnbound = function (value) {
        return value === SingleKeyRange.UNBOUND_VALUE;
    };
    SingleKeyRange.upperBound = function (key, shouldExclude) {
        if (shouldExclude === void 0) { shouldExclude = false; }
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, key, false, shouldExclude);
    };
    SingleKeyRange.lowerBound = function (key, shouldExclude) {
        if (shouldExclude === void 0) { shouldExclude = false; }
        return new SingleKeyRange(key, SingleKeyRange.UNBOUND_VALUE, shouldExclude, false);
    };
    SingleKeyRange.only = function (key) {
        return new SingleKeyRange(key, key, false, false);
    };
    SingleKeyRange.all = function () {
        return new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, SingleKeyRange.UNBOUND_VALUE, false, false);
    };
    SingleKeyRange.xor = function (a, b) {
        return a ? !b : b;
    };
    SingleKeyRange.compare = function (lhs, rhs) {
        var result = SingleKeyRange.compareKey(lhs.from, rhs.from, true, lhs.excludeLower, rhs.excludeLower);
        if (result === Favor.TIE) {
            result = SingleKeyRange.compareKey(lhs.to, rhs.to, false, lhs.excludeUpper, rhs.excludeUpper);
        }
        return result;
    };
    SingleKeyRange.getBoundingRange = function (r1, r2) {
        var from = SingleKeyRange.UNBOUND_VALUE;
        var to = SingleKeyRange.UNBOUND_VALUE;
        var excludeLower = false;
        var excludeUpper = false;
        if (!SingleKeyRange.isUnbound(r1.from) &&
            !SingleKeyRange.isUnbound(r2.from)) {
            var favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
            if (favor !== Favor.LHS) {
                from = r1.from;
                excludeLower =
                    favor !== Favor.TIE
                        ? r1.excludeLower
                        : r1.excludeLower && r2.excludeLower;
            }
            else {
                from = r2.from;
                excludeLower = r2.excludeLower;
            }
        }
        if (!SingleKeyRange.isUnbound(r1.to) && !SingleKeyRange.isUnbound(r2.to)) {
            var favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            if (favor !== Favor.RHS) {
                to = r1.to;
                excludeUpper =
                    favor !== Favor.TIE
                        ? r1.excludeUpper
                        : r1.excludeUpper && r2.excludeUpper;
            }
            else {
                to = r2.to;
                excludeUpper = r2.excludeUpper;
            }
        }
        return new SingleKeyRange(from, to, excludeLower, excludeUpper);
    };
    SingleKeyRange.and = function (r1, r2) {
        if (!r1.overlaps(r2)) {
            return null;
        }
        var favor = SingleKeyRange.compareKey(r1.from, r2.from, true);
        var left = favor === Favor.TIE
            ? r1.excludeLower
                ? r1
                : r2
            : favor !== Favor.RHS
                ? r1
                : r2;
        var right;
        if (SingleKeyRange.isUnbound(r1.to) || SingleKeyRange.isUnbound(r2.to)) {
            right = SingleKeyRange.isUnbound(r1.to) ? r2 : r1;
        }
        else {
            favor = SingleKeyRange.compareKey(r1.to, r2.to, false);
            right =
                favor === Favor.TIE
                    ? r1.excludeUpper
                        ? r1
                        : r2
                    : favor === Favor.RHS
                        ? r1
                        : r2;
        }
        return new SingleKeyRange(left.from, right.to, left.excludeLower, right.excludeUpper);
    };
    SingleKeyRange.complement = function (keyRanges) {
        if (keyRanges.length === 0) {
            return SingleKeyRange.EMPTY_RANGE;
        }
        keyRanges.sort(SingleKeyRange.compare);
        var complementKeyRanges = new Array(keyRanges.length + 1);
        for (var i = 0; i < complementKeyRanges.length; i++) {
            if (i === 0) {
                complementKeyRanges[i] = SingleKeyRange.upperBound(keyRanges[i].from, true);
            }
            else if (i === complementKeyRanges.length - 1) {
                complementKeyRanges[i] = SingleKeyRange.lowerBound(keyRanges[i - 1].to, true);
            }
            else {
                complementKeyRanges[i] = new SingleKeyRange(keyRanges[i - 1].to, keyRanges[i].from, true, true);
            }
        }
        return complementKeyRanges;
    };
    SingleKeyRange.compareKey = function (l, r, isLeftHandSide, excludeL, excludeR) {
        if (excludeL === void 0) { excludeL = false; }
        if (excludeR === void 0) { excludeR = false; }
        var flip = function (favor) {
            return isLeftHandSide ? favor : favor === Favor.LHS ? Favor.RHS : Favor.LHS;
        };
        var tieLogic = function () {
            return !SingleKeyRange.xor(excludeL, excludeR)
                ? Favor.TIE
                : excludeL
                    ? flip(Favor.LHS)
                    : flip(Favor.RHS);
        };
        if (SingleKeyRange.isUnbound(l)) {
            return !SingleKeyRange.isUnbound(r) ? flip(Favor.RHS) : tieLogic();
        }
        return SingleKeyRange.isUnbound(r)
            ? flip(Favor.LHS)
            : l < r
                ? Favor.RHS
                : l === r
                    ? tieLogic()
                    : Favor.LHS;
    };
    SingleKeyRange.prototype.toString = function () {
        return ((this.excludeLower ? '(' : '[') +
            (SingleKeyRange.isUnbound(this.from) ? 'unbound' : this.from) +
            ', ' +
            (SingleKeyRange.isUnbound(this.to) ? 'unbound' : this.to) +
            (this.excludeUpper ? ')' : ']'));
    };
    SingleKeyRange.prototype.complement = function () {
        if (this.isAll()) {
            return SingleKeyRange.EMPTY_RANGE;
        }
        var keyRangeLow = null;
        var keyRangeHigh = null;
        if (!SingleKeyRange.isUnbound(this.from)) {
            keyRangeLow = new SingleKeyRange(SingleKeyRange.UNBOUND_VALUE, this.from, false, !this.excludeLower);
        }
        if (!SingleKeyRange.isUnbound(this.to)) {
            keyRangeHigh = new SingleKeyRange(this.to, SingleKeyRange.UNBOUND_VALUE, !this.excludeUpper, false);
        }
        return [keyRangeLow, keyRangeHigh].filter(function (keyRange) { return keyRange !== null; });
    };
    SingleKeyRange.prototype.reverse = function () {
        return new SingleKeyRange(this.to, this.from, this.excludeUpper, this.excludeLower);
    };
    SingleKeyRange.prototype.overlaps = function (range) {
        var favor = SingleKeyRange.compareKey(this.from, range.from, true, this.excludeLower, range.excludeLower);
        if (favor === Favor.TIE) {
            return true;
        }
        var left = favor === Favor.RHS ? this : range;
        var right = favor === Favor.LHS ? this : range;
        return (SingleKeyRange.isUnbound(left.to) ||
            left.to > right.from ||
            (left.to === right.from && !left.excludeUpper && !right.excludeLower));
    };
    SingleKeyRange.prototype.isAll = function () {
        return (SingleKeyRange.isUnbound(this.from) && SingleKeyRange.isUnbound(this.to));
    };
    SingleKeyRange.prototype.isOnly = function () {
        return (this.from === this.to &&
            !SingleKeyRange.isUnbound(this.from) &&
            !this.excludeLower &&
            !this.excludeUpper);
    };
    SingleKeyRange.prototype.contains = function (key) {
        var left = SingleKeyRange.isUnbound(this.from) ||
            key > this.from ||
            (key === this.from && !this.excludeLower);
        var right = SingleKeyRange.isUnbound(this.to) ||
            key < this.to ||
            (key === this.to && !this.excludeUpper);
        return left && right;
    };
    SingleKeyRange.prototype.getBounded = function (min, max) {
        if ((SingleKeyRange.isUnbound(this.from) && !this.contains(min)) ||
            (SingleKeyRange.isUnbound(this.to) && !this.contains(max))) {
            return null;
        }
        var from = min;
        var to = max;
        var excludeLower = false;
        var excludeUpper = false;
        if (!SingleKeyRange.isUnbound(this.from) && this.from >= min) {
            from = this.from;
            excludeLower = this.excludeLower;
        }
        if (!SingleKeyRange.isUnbound(this.to) && this.to <= max) {
            to = this.to;
            excludeUpper = this.excludeUpper;
        }
        if (from > to || (from === to && (excludeUpper || excludeLower))) {
            return null;
        }
        return new SingleKeyRange(from, to, excludeLower, excludeUpper);
    };
    SingleKeyRange.prototype.equals = function (range) {
        return (this.from === range.from &&
            this.excludeLower === range.excludeLower &&
            this.to === range.to &&
            this.excludeUpper === range.excludeUpper);
    };
    SingleKeyRange.UNBOUND_VALUE = new UnboundKey();
    SingleKeyRange.EMPTY_RANGE = [];
    return SingleKeyRange;
}());
var Row = (function () {
    function Row(id_, payload) {
        this.id_ = id_;
        this.payload_ = payload || this.defaultPayload();
    }
    Row.getNextId = function () {
        return Row.nextId++;
    };
    Row.setNextId = function (nextId) {
        Row.nextId = nextId;
    };
    Row.setNextIdIfGreater = function (nextId) {
        Row.nextId = Math.max(Row.nextId, nextId);
    };
    Row.deserialize = function (data) {
        return new Row(data.id, data.value);
    };
    Row.create = function (payload) {
        return new Row(Row.getNextId(), payload || {});
    };
    Row.binToHex = function (buffer) {
        if (buffer === null) {
            return null;
        }
        var uint8Array = new Uint8Array(buffer);
        var s = '';
        uint8Array.forEach(function (c) {
            var chr = c.toString(16);
            s += chr.length < 2 ? '0' + chr : chr;
        });
        return s;
    };
    Row.hexToBin = function (hex) {
        if (hex === null || hex === '') {
            return null;
        }
        if (hex.length % 2 !== 0) {
            hex = '0' + hex;
        }
        var buffer = new ArrayBuffer(hex.length / 2);
        var uint8Array = new Uint8Array(buffer);
        for (var i = 0, j = 0; i < hex.length; i += 2) {
            uint8Array[j++] = Number("0x".concat(hex.substr(i, 2))) & 0xff;
        }
        return buffer;
    };
    Row.prototype.id = function () {
        return this.id_;
    };
    Row.prototype.assignRowId = function (id) {
        this.id_ = id;
    };
    Row.prototype.payload = function () {
        return this.payload_;
    };
    Row.prototype.defaultPayload = function () {
        return {};
    };
    Row.prototype.toDbPayload = function () {
        return this.payload_;
    };
    Row.prototype.serialize = function () {
        return { id: this.id_, value: this.toDbPayload() };
    };
    Row.prototype.keyOfIndex = function (indexName) {
        if (indexName.substr(-1) === '#') {
            return this.id_;
        }
        return null;
    };
    Row.DUMMY_ID = -1;
    Row.nextId = Row.DUMMY_ID + 1;
    return Row;
}());
var DefaultOptions = (function () {
    function DefaultOptions() {
        this.debugMode = false;
        this.memoryOnly = false;
        this.exceptionUrl = DefaultOptions.url;
        this.useGetAll = false;
    }
    DefaultOptions.prototype.errorMessage = function (code) {
        return code.toString();
    };
    DefaultOptions.url = 'http://google.github.io/lovefield/error_lookup/src/error_lookup.html?c=';
    return DefaultOptions;
}());
var options = (function () {
    function options() {
    }
    options.set = function (opt) {
        var options = opt || new DefaultOptions();
        if (typeof options.exceptionUrl !== 'string') {
            options.exceptionUrl = DefaultOptions.url;
        }
        if (typeof options.errorMessage !== 'function') {
            options.errorMessage = function (code) {
                return code.toString();
            };
        }
        Global.get().setOptions(options);
    };
    return options;
}());
exports.options = options;
var ServiceId = (function () {
    function ServiceId(serviceId) {
        this.serviceId = serviceId;
    }
    ServiceId.prototype.toString = function () {
        return this.serviceId;
    };
    ServiceId.prototype.getAsType = function () {
        return {};
    };
    return ServiceId;
}());
var Global = (function () {
    function Global() {
        this.services = new Map();
    }
    Global.get = function () {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        if (!Global.instance.opt) {
            Global.instance.setOptions(new DefaultOptions());
        }
        return Global.instance;
    };
    Global.prototype.clear = function () {
        this.services.clear();
    };
    Global.prototype.registerService = function (serviceId, service) {
        this.services.set(serviceId.toString(), service);
        return service;
    };
    Global.prototype.getService = function (serviceId) {
        var service = this.services.get(serviceId.toString());
        if (!service) {
            throw new Exception(ErrorCode.SERVICE_NOT_FOUND, serviceId.toString());
        }
        return service;
    };
    Global.prototype.isRegistered = function (serviceId) {
        return this.services.has(serviceId.toString());
    };
    Global.prototype.listServices = function () {
        return Array.from(this.services.keys());
    };
    Global.prototype.getOptions = function () {
        return this.opt;
    };
    Global.prototype.setOptions = function (options) {
        this.opt = options;
    };
    return Global;
}());
var Exception = (function () {
    function Exception(code) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.code = code;
        this.args = args;
        this.message = Global.get().getOptions().exceptionUrl + code.toString();
        if (args.length) {
            for (var i = 0; i < Math.min(4, args.length); ++i) {
                var val = encodeURIComponent(String(args[i]).slice(0, 64));
                if (Global.get().getOptions().exceptionUrl.length) {
                    this.message += "&p".concat(i, "=").concat(val);
                }
                else {
                    this.message += "|".concat(val);
                }
            }
        }
    }
    Exception.prototype.toString = function () {
        var _this = this;
        var template = Global.get()
            .getOptions()
            .errorMessage(this.code) || this.code.toString();
        return template.replace(/{([^}]+)}/g, function (match, pattern) { return _this.args[Number(pattern)]; });
    };
    return Exception;
}());
function assert(condition, message) {
    if (message === void 0) { message = 'assertion failed'; }
    if (Global.get().getOptions().debugMode) {
        if (!condition) {
            throw new Exception(ErrorCode.ASSERTION, message);
        }
    }
}
function bind(index) {
    return new Binder(index);
}
exports.bind = bind;
var Binder = (function () {
    function Binder(index) {
        this.index = index;
    }
    Binder.prototype.getIndex = function () {
        return this.index;
    };
    return Binder;
}());
exports.Binder = Binder;
function isSubset(set1, set2) {
    if (set2.size > set1.size) {
        return false;
    }
    var result = true;
    set2.forEach(function (value) { return (result = result && set1.has(value)); });
    return result;
}
function setEquals(set1, set2) {
    return set1.size === set2.size && isSubset(set1, set2);
}
var ForeignKeySpec = (function () {
    function ForeignKeySpec(rawSpec, childTable, name) {
        this.childTable = childTable;
        var array = rawSpec.ref.split('.');
        if (array.length !== 2) {
            throw new Exception(ErrorCode.INVALID_FK_REF, name);
        }
        this.childColumn = rawSpec.local;
        this.parentTable = array[0];
        this.parentColumn = array[1];
        this.name = "".concat(childTable, ".").concat(name);
        this.action = rawSpec.action || ConstraintAction.RESTRICT;
        this.timing = rawSpec.timing || ConstraintTiming.IMMEDIATE;
    }
    return ForeignKeySpec;
}());
var IndexImpl = (function () {
    function IndexImpl(tableName, name, isUnique, columns) {
        this.tableName = tableName;
        this.name = name;
        this.isUnique = isUnique;
        this.columns = columns;
    }
    IndexImpl.prototype.getNormalizedName = function () {
        return "".concat(this.tableName, ".").concat(this.name);
    };
    IndexImpl.prototype.hasNullableColumn = function () {
        return this.columns.some(function (column) { return column.schema.isNullable(); });
    };
    return IndexImpl;
}());
var Constraint = (function () {
    function Constraint(primaryKey, notNullable, foreignKeys) {
        this.primaryKey = primaryKey;
        this.notNullable = notNullable;
        this.foreignKeys = foreignKeys;
    }
    Constraint.prototype.getPrimaryKey = function () {
        return this.primaryKey;
    };
    Constraint.prototype.getNotNullable = function () {
        return this.notNullable;
    };
    Constraint.prototype.getForeignKeys = function () {
        return this.foreignKeys;
    };
    return Constraint;
}());
var RelationEntry = (function () {
    function RelationEntry(row, isPrefixApplied) {
        this.row = row;
        this.isPrefixApplied = isPrefixApplied;
        this.id = RelationEntry.getNextId();
    }
    RelationEntry.combineEntries = function (leftEntry, leftEntryTables, rightEntry, rightEntryTables) {
        var result = {};
        var mergeEntry = function (entry, entryTables) {
            if (entry.isPrefixApplied) {
                var payload_1 = entry.row.payload();
                Array.from(Object.keys(payload_1)).forEach(function (prefix) {
                    result[prefix] = payload_1[prefix];
                });
            }
            else {
                assert(!Object.prototype.hasOwnProperty.call(result, entryTables[0]), 'Attempted to join table with itself, without using table alias, ' +
                    'or same alias ' +
                    entryTables[0] +
                    'is reused for multiple tables.');
                result[entryTables[0]] = entry.row.payload();
            }
        };
        mergeEntry(leftEntry, leftEntryTables);
        mergeEntry(rightEntry, rightEntryTables);
        var row = new Row(Row.DUMMY_ID, result);
        return new RelationEntry(row, true);
    };
    RelationEntry.getNextId = function () {
        return RelationEntry.nextId++;
    };
    RelationEntry.prototype.getField = function (col) {
        var column = col;
        var alias = column.getAlias();
        if (alias !== null &&
            Object.prototype.hasOwnProperty.call(this.row.payload(), alias)) {
            return this.row.payload()[alias];
        }
        if (this.isPrefixApplied) {
            return this.row.payload()[column.getTable().getEffectiveName()][column.getName()];
        }
        else {
            return this.row.payload()[column.getName()];
        }
    };
    RelationEntry.prototype.setField = function (col, value) {
        var column = col;
        var alias = column.getAlias();
        if (alias !== null) {
            this.row.payload()[alias] = value;
            return;
        }
        if (this.isPrefixApplied) {
            var tableName = column.getTable().getEffectiveName();
            var containerObj = this.row.payload()[tableName];
            if (!(containerObj !== undefined && containerObj !== null)) {
                containerObj = {};
                this.row.payload()[tableName] = containerObj;
            }
            containerObj[column.getName()] = value;
        }
        else {
            this.row.payload()[column.getName()] = value;
        }
    };
    RelationEntry.nextId = 0;
    return RelationEntry;
}());
var Relation = (function () {
    function Relation(entries, tables) {
        this.entries = entries;
        this.tables = new Set(tables);
        this.aggregationResults = null;
    }
    Relation.createEmpty = function () {
        if (Relation.emptyRelation === null) {
            Relation.emptyRelation = new Relation([], []);
        }
        return Relation.emptyRelation;
    };
    Relation.intersect = function (relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        var totalCount = relations.reduce(function (soFar, relation) {
            Relation.assertCompatible(relations[0], relation);
            return soFar + relation.entries.length;
        }, 0);
        var allEntries = new Array(totalCount);
        var entryCounter = 0;
        var relationMaps = relations.map(function (relation) {
            var map = new Map();
            relation.entries.forEach(function (entry) {
                allEntries[entryCounter++] = entry;
                map.set(entry.id, entry);
            });
            return map;
        });
        var intersection = new Map();
        allEntries.forEach(function (entry) {
            var existsInAll = relationMaps.every(function (relation) {
                return relation.has(entry.id);
            });
            if (existsInAll) {
                intersection.set(entry.id, entry);
            }
        });
        return new Relation(Array.from(intersection.values()), Array.from(relations[0].tables.values()));
    };
    Relation.union = function (relations) {
        if (relations.length === 0) {
            return Relation.createEmpty();
        }
        var union = new Map();
        relations.forEach(function (relation) {
            Relation.assertCompatible(relations[0], relation);
            relation.entries.forEach(function (entry) { return union.set(entry.id, entry); });
        });
        return new Relation(Array.from(union.values()), Array.from(relations[0].tables.values()));
    };
    Relation.fromRows = function (rows, tables) {
        var isPrefixApplied = tables.length > 1;
        var entries = rows.map(function (row) { return new RelationEntry(row, isPrefixApplied); });
        return new Relation(entries, tables);
    };
    Relation.assertCompatible = function (lhs, rhs) {
        assert(lhs.isCompatible(rhs), 'Intersection/union operations only apply to compatible relations.');
    };
    Relation.prototype.isCompatible = function (relation) {
        return setEquals(this.tables, relation.tables);
    };
    Relation.prototype.getTables = function () {
        return Array.from(this.tables.values());
    };
    Relation.prototype.isPrefixApplied = function () {
        return this.tables.size > 1;
    };
    Relation.prototype.getPayloads = function () {
        return this.entries.map(function (entry) { return entry.row.payload(); });
    };
    Relation.prototype.getRowIds = function () {
        return this.entries.map(function (entry) { return entry.row.id(); });
    };
    Relation.prototype.setAggregationResult = function (column, result) {
        if (this.aggregationResults === null) {
            this.aggregationResults = new Map();
        }
        this.aggregationResults.set(column.getNormalizedName(), result);
    };
    Relation.prototype.getAggregationResult = function (column) {
        assert(this.aggregationResults !== null, 'getAggregationResult called before any results have been calculated.');
        var colName = column.getNormalizedName();
        var result = this.aggregationResults.get(colName);
        assert(result !== undefined, "Could not find result for ".concat(colName));
        return result;
    };
    Relation.prototype.hasAggregationResult = function (column) {
        return (this.aggregationResults !== null &&
            this.aggregationResults.has(column.getNormalizedName()));
    };
    Relation.emptyRelation = null;
    return Relation;
}());
var IndexStats = (function () {
    function IndexStats() {
        this.totalRows = 0;
        this.maxKeyEncountered = 0;
    }
    IndexStats.prototype.add = function (key, rowCount) {
        this.totalRows += rowCount;
        this.maxKeyEncountered =
            this.maxKeyEncountered === null
                ? key
                : key > this.maxKeyEncountered
                    ? key
                    : this.maxKeyEncountered;
    };
    IndexStats.prototype.remove = function (key, removedCount) {
        this.totalRows -= removedCount;
    };
    IndexStats.prototype.clear = function () {
        this.totalRows = 0;
    };
    IndexStats.prototype.updateFromList = function (statsList) {
        var _this = this;
        this.clear();
        statsList.forEach(function (stats) { return (_this.totalRows += stats.totalRows); });
    };
    return IndexStats;
}());
var UniqueId = (function () {
    function UniqueId() {
    }
    UniqueId.prototype.getUniqueId = function () {
        if (this.uniqueId === undefined) {
            this.uniqueId = "lf_".concat(this.getUniqueNumber());
        }
        return this.uniqueId;
    };
    UniqueId.prototype.getUniqueNumber = function () {
        if (this.uniqueNumber === undefined) {
            this.uniqueNumber = ++UniqueId.nextId;
        }
        return this.uniqueNumber;
    };
    UniqueId.nextId = 0;
    return UniqueId;
}());
var TreeNode = (function () {
    function TreeNode() {
        this.parent = null;
        this.children = null;
    }
    TreeNode.prototype.getParent = function () {
        return this.parent;
    };
    TreeNode.prototype.setParent = function (parentNode) {
        this.parent = parentNode;
    };
    TreeNode.prototype.getRoot = function () {
        var root = this;
        while (root.parent !== null) {
            root = root.parent;
        }
        return root;
    };
    TreeNode.prototype.getDepth = function () {
        var depth = 0;
        var node = this;
        while (node.parent !== null) {
            depth++;
            node = node.parent;
        }
        return depth;
    };
    TreeNode.prototype.isLeaf = function () {
        return this.children === null;
    };
    TreeNode.prototype.getChildren = function () {
        return this.children || TreeNode.EMPTY_ARRAY;
    };
    TreeNode.prototype.getChildAt = function (index) {
        return this.children && index >= 0 && index < this.children.length
            ? this.getChildren()[index]
            : null;
    };
    TreeNode.prototype.getChildCount = function () {
        return this.getChildren().length;
    };
    TreeNode.prototype.addChildAt = function (child, index) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            this.children = [child];
        }
        else {
            assert(index >= 0 && index <= this.children.length);
            this.children.splice(index, 0, child);
        }
    };
    TreeNode.prototype.addChild = function (child) {
        assert(child.parent === null);
        child.parent = this;
        if (this.children === null) {
            this.children = [child];
        }
        else {
            this.children.push(child);
        }
    };
    TreeNode.prototype.removeChildAt = function (index) {
        if (this.children) {
            var child = this.children[index];
            if (child) {
                child.parent = null;
                this.children.splice(index, 1);
                if (this.children.length === 0) {
                    this.children = null;
                }
                return child;
            }
        }
        return null;
    };
    TreeNode.prototype.removeChild = function (child) {
        return this.children
            ? this.removeChildAt(this.children.indexOf(child))
            : null;
    };
    TreeNode.prototype.replaceChildAt = function (newChild, index) {
        assert(newChild.parent === null);
        if (this.children) {
            var oldChild = this.getChildAt(index);
            if (oldChild) {
                oldChild.parent = null;
                newChild.parent = this;
                this.children[index] = newChild;
                return oldChild;
            }
        }
        return null;
    };
    TreeNode.prototype.traverse = function (f) {
        if (f(this) !== false) {
            this.getChildren().forEach(function (child) { return child.traverse(f); });
        }
    };
    TreeNode.EMPTY_ARRAY = [];
    return TreeNode;
}());
var PredicateNode = (function (_super) {
    __extends(PredicateNode, _super);
    function PredicateNode() {
        var _this = _super.call(this) || this;
        _this.id = PredicateNode.nextId++;
        return _this;
    }
    PredicateNode.prototype.setId = function (id) {
        this.id = id;
    };
    PredicateNode.prototype.getId = function () {
        return this.id;
    };
    PredicateNode.nextId = 0;
    return PredicateNode;
}(TreeNode));
var EvalType;
(function (EvalType) {
    EvalType["BETWEEN"] = "between";
    EvalType["EQ"] = "eq";
    EvalType["GTE"] = "gte";
    EvalType["GT"] = "gt";
    EvalType["IN"] = "in";
    EvalType["LTE"] = "lte";
    EvalType["LT"] = "lt";
    EvalType["MATCH"] = "match";
    EvalType["NEQ"] = "neq";
})(EvalType || (EvalType = {}));
function identity(value) {
    return value;
}
function buildKeyOfIndexConversionMap() {
    var map = new Map();
    map.set(Type.BOOLEAN, (function (value) {
        return value === null ? null : value ? 1 : 0;
    }));
    map.set(Type.DATE_TIME, (function (value) {
        return value === null ? null : value.getTime();
    }));
    map.set(Type.INTEGER, identity);
    map.set(Type.NUMBER, identity);
    map.set(Type.STRING, identity);
    return map;
}
function buildBooleanEvaluatorMap() {
    var map = new Map();
    map.set(EvalType.EQ, function (a, b) { return a === b; });
    map.set(EvalType.NEQ, function (a, b) { return a !== b; });
    return map;
}
function buildCommonEvaluatorMap() {
    var map = buildBooleanEvaluatorMap();
    map.set(EvalType.BETWEEN, function (a, range) {
        return a === null || range[0] === null || range[1] === null
            ? false
            : a >= range[0] && a <= range[1];
    });
    map.set(EvalType.GTE, function (a, b) {
        return a === null || b === null ? false : a >= b;
    });
    map.set(EvalType.GT, function (a, b) {
        return a === null || b === null ? false : a > b;
    });
    map.set(EvalType.IN, function (rowValue, values) {
        return values.indexOf(rowValue) !== -1;
    });
    map.set(EvalType.LTE, function (a, b) {
        return a === null || b === null ? false : a <= b;
    });
    map.set(EvalType.LT, function (a, b) {
        return a === null || b === null ? false : a < b;
    });
    return map;
}
var buildNumberEvaluatorMap = buildCommonEvaluatorMap;
function buildStringEvaluatorMap() {
    var map = buildCommonEvaluatorMap();
    map.set(EvalType.MATCH, function (value, regex) {
        if (value === null || regex === null) {
            return false;
        }
        var re = new RegExp(regex);
        return re.test(value);
    });
    return map;
}
function buildObjectEvaluatorMap() {
    var map = new Map();
    var checkNull = function (value) {
        if (value !== null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
    };
    map.set(EvalType.EQ, function (a, b) {
        checkNull(b);
        return a === null;
    });
    map.set(EvalType.NEQ, function (a, b) {
        checkNull(b);
        return a !== null;
    });
    return map;
}
function buildDateEvaluatorMap() {
    var map = new Map();
    map.set(EvalType.BETWEEN, function (a, range) {
        return a === null || range[0] === null || range[1] === null
            ? false
            : a.getTime() >= range[0].getTime() && a.getTime() <= range[1].getTime();
    });
    map.set(EvalType.EQ, function (a, b) {
        var aTime = a === null ? -1 : a.getTime();
        var bTime = b === null ? -1 : b.getTime();
        return aTime === bTime;
    });
    map.set(EvalType.GTE, function (a, b) {
        return a === null || b === null ? false : a.getTime() >= b.getTime();
    });
    map.set(EvalType.GT, function (a, b) {
        return a === null || b === null ? false : a.getTime() > b.getTime();
    });
    map.set(EvalType.IN, function (targetValue, values) {
        return values.some(function (value) { return value.getTime() === targetValue.getTime(); });
    });
    map.set(EvalType.LTE, function (a, b) {
        return a === null || b === null ? false : a.getTime() <= b.getTime();
    });
    map.set(EvalType.LT, function (a, b) {
        return a === null || b === null ? false : a.getTime() < b.getTime();
    });
    map.set(EvalType.NEQ, function (a, b) {
        var aTime = a === null ? -1 : a.getTime();
        var bTime = b === null ? -1 : b.getTime();
        return aTime !== bTime;
    });
    return map;
}
var EvalRegistry = (function () {
    function EvalRegistry() {
        this.keyOfIndexConversionMap = buildKeyOfIndexConversionMap();
        this.evalMaps = new Map();
        var numberOrIntegerEvalMap = buildNumberEvaluatorMap();
        this.evalMaps.set(Type.BOOLEAN, buildBooleanEvaluatorMap());
        this.evalMaps.set(Type.DATE_TIME, buildDateEvaluatorMap());
        this.evalMaps.set(Type.NUMBER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.INTEGER, numberOrIntegerEvalMap);
        this.evalMaps.set(Type.STRING, buildStringEvaluatorMap());
        this.evalMaps.set(Type.OBJECT, buildObjectEvaluatorMap());
    }
    EvalRegistry.get = function () {
        EvalRegistry.instance = EvalRegistry.instance || new EvalRegistry();
        return EvalRegistry.instance;
    };
    EvalRegistry.prototype.getEvaluator = function (columnType, evaluatorType) {
        var evaluationMap = this.evalMaps.get(columnType) || null;
        if (evaluationMap === null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        var evaluatorFn = evaluationMap.get(evaluatorType) || null;
        if (evaluatorFn === null) {
            throw new Exception(ErrorCode.INVALID_PREDICATE);
        }
        return evaluatorFn;
    };
    EvalRegistry.prototype.getKeyOfIndexEvaluator = function (columnType) {
        var fn = this.keyOfIndexConversionMap.get(columnType) || null;
        if (fn === null) {
            throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        return fn;
    };
    return EvalRegistry;
}());
var SingleKeyRangeSet = (function () {
    function SingleKeyRangeSet(ranges) {
        this.ranges = [];
        if (ranges) {
            this.add(ranges);
        }
    }
    SingleKeyRangeSet.intersect = function (s0, s1) {
        var ranges = s0.getValues().map(function (r0) {
            return s1.getValues().map(function (r1) { return SingleKeyRange.and(r0, r1); });
        });
        var results = [];
        ranges.forEach(function (dimension) { return (results = results.concat(dimension)); });
        return new SingleKeyRangeSet(results.filter(function (r) { return r !== null; }));
    };
    SingleKeyRangeSet.prototype.toString = function () {
        return this.ranges.map(function (r) { return r.toString(); }).join(',');
    };
    SingleKeyRangeSet.prototype.containsKey = function (key) {
        return this.ranges.some(function (r) { return r.contains(key); });
    };
    SingleKeyRangeSet.prototype.getValues = function () {
        return this.ranges;
    };
    SingleKeyRangeSet.prototype.add = function (keyRanges) {
        if (keyRanges.length === 0) {
            return;
        }
        var ranges = this.ranges.concat(keyRanges);
        if (ranges.length === 1) {
            this.ranges = ranges;
            return;
        }
        ranges.sort(SingleKeyRange.compare);
        var results = [];
        var start = ranges[0];
        for (var i = 1; i < ranges.length; ++i) {
            if (start.overlaps(ranges[i])) {
                start = SingleKeyRange.getBoundingRange(start, ranges[i]);
            }
            else {
                results.push(start);
                start = ranges[i];
            }
        }
        results.push(start);
        this.ranges = results;
    };
    SingleKeyRangeSet.prototype.equals = function (set) {
        if (this.ranges.length === set.ranges.length) {
            return (this.ranges.length === 0 ||
                this.ranges.every(function (r, index) { return r.equals(set.ranges[index]); }));
        }
        return false;
    };
    SingleKeyRangeSet.prototype.getBoundingRange = function () {
        if (this.ranges.length <= 1) {
            return this.ranges.length === 0 ? null : this.ranges[0];
        }
        var last = this.ranges.length - 1;
        return SingleKeyRange.getBoundingRange(this.ranges[0], this.ranges[last]);
    };
    return SingleKeyRangeSet;
}());
var ValuePredicate = (function (_super) {
    __extends(ValuePredicate, _super);
    function ValuePredicate(column, value, evaluatorType) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.value = value;
        _this.evaluatorType = evaluatorType;
        _this.evaluatorFn = EvalRegistry.get().getEvaluator(_this.column.getType(), _this.evaluatorType);
        _this.isComplement = false;
        _this.binder = value;
        return _this;
    }
    ValuePredicate.prototype.eval = function (relation) {
        var _this = this;
        this.checkBinding();
        if (this.evaluatorType === EvalType.IN) {
            return this.evalAsIn(relation);
        }
        var entries = relation.entries.filter(function (entry) {
            return (_this.evaluatorFn(entry.getField(_this.column), _this.value) !==
                _this.isComplement);
        });
        return new Relation(entries, relation.getTables());
    };
    ValuePredicate.prototype.setComplement = function (isComplement) {
        this.isComplement = isComplement;
    };
    ValuePredicate.prototype.copy = function () {
        var clone = new ValuePredicate(this.column, this.value, this.evaluatorType);
        clone.binder = this.binder;
        clone.isComplement = this.isComplement;
        clone.setId(this.getId());
        return clone;
    };
    ValuePredicate.prototype.getColumns = function (results) {
        if (results) {
            results.push(this.column);
            return results;
        }
        return [this.column];
    };
    ValuePredicate.prototype.getTables = function (results) {
        var tables = results ? results : new Set();
        tables.add(this.column.getTable());
        return tables;
    };
    ValuePredicate.prototype.setBinder = function (binder) {
        this.binder = binder;
    };
    ValuePredicate.prototype.bind = function (values) {
        var checkIndexWithinRange = function (index) {
            if (values.length <= index) {
                throw new Exception(ErrorCode.BIND_ARRAY_OUT_OF_RANGE);
            }
        };
        if (this.binder instanceof Binder) {
            var index = this.binder.index;
            checkIndexWithinRange(index);
            this.value = values[index];
        }
        else if (Array.isArray(this.binder)) {
            var array = this.binder;
            this.value = array.map(function (val) {
                if (val instanceof Binder) {
                    checkIndexWithinRange(val.index);
                    return values[val.index];
                }
                else {
                    return val;
                }
            });
        }
    };
    ValuePredicate.prototype.toString = function () {
        return ('value_pred(' +
            this.column.getNormalizedName() +
            ' ' +
            this.evaluatorType +
            (this.isComplement ? '(complement)' : '') +
            ' ' +
            this.value +
            ')');
    };
    ValuePredicate.prototype.peek = function () {
        return this.value;
    };
    ValuePredicate.prototype.isKeyRangeCompatible = function () {
        this.checkBinding();
        return (this.value !== null &&
            (this.evaluatorType === EvalType.BETWEEN ||
                this.evaluatorType === EvalType.IN ||
                this.evaluatorType === EvalType.EQ ||
                this.evaluatorType === EvalType.GT ||
                this.evaluatorType === EvalType.GTE ||
                this.evaluatorType === EvalType.LT ||
                this.evaluatorType === EvalType.LTE));
    };
    ValuePredicate.prototype.toKeyRange = function () {
        assert(this.isKeyRangeCompatible(), 'Could not convert predicate to key range.');
        var keyRange = null;
        if (this.evaluatorType === EvalType.BETWEEN) {
            var val = this.value;
            keyRange = new SingleKeyRange(this.getValueAsKey(val[0]), this.getValueAsKey(val[1]), false, false);
        }
        else if (this.evaluatorType === EvalType.IN) {
            var val = this.value;
            var keyRanges = val.map(function (v) { return SingleKeyRange.only(v); });
            return new SingleKeyRangeSet(this.isComplement ? SingleKeyRange.complement(keyRanges) : keyRanges);
        }
        else {
            var value = this.getValueAsKey(this.value);
            if (this.evaluatorType === EvalType.EQ) {
                keyRange = SingleKeyRange.only(value);
            }
            else if (this.evaluatorType === EvalType.GTE) {
                keyRange = SingleKeyRange.lowerBound(value);
            }
            else if (this.evaluatorType === EvalType.GT) {
                keyRange = SingleKeyRange.lowerBound(value, true);
            }
            else if (this.evaluatorType === EvalType.LTE) {
                keyRange = SingleKeyRange.upperBound(value);
            }
            else {
                keyRange = SingleKeyRange.upperBound(value, true);
            }
        }
        return new SingleKeyRangeSet(this.isComplement ? keyRange.complement() : [keyRange]);
    };
    ValuePredicate.prototype.checkBinding = function () {
        var bound = false;
        if (!(this.value instanceof Binder)) {
            if (Array.isArray(this.value)) {
                var array = this.value;
                bound = !array.some(function (val) { return val instanceof Binder; });
            }
            else {
                bound = true;
            }
        }
        if (!bound) {
            throw new Exception(ErrorCode.UNBOUND_VALUE);
        }
    };
    ValuePredicate.prototype.evalAsIn = function (relation) {
        var _this = this;
        assert(this.evaluatorType === EvalType.IN, 'ValuePredicate#evalAsIn_() called for wrong predicate type.');
        var valueSet = new Set(this.value);
        var evaluatorFn = function (rowValue) {
            return rowValue === null
                ? false
                : valueSet.has(rowValue) !== _this.isComplement;
        };
        var entries = relation.entries.filter(function (entry) {
            return evaluatorFn(entry.getField(_this.column));
        });
        return new Relation(entries, relation.getTables());
    };
    ValuePredicate.prototype.getValueAsKey = function (value) {
        if (this.column.getType() === Type.DATE_TIME) {
            return value.getTime();
        }
        return value;
    };
    return ValuePredicate;
}(PredicateNode));
var Context = (function (_super) {
    __extends(Context, _super);
    function Context(schema) {
        var _this = _super.call(this) || this;
        _this.schema = schema;
        _this.clonedFrom = null;
        _this.where = null;
        _this.predicateMap = null;
        return _this;
    }
    Context.buildPredicateMap = function (rootPredicate) {
        var predicateMap = new Map();
        rootPredicate.traverse(function (n) {
            var node = n;
            predicateMap.set(node.getId(), node);
        });
        return predicateMap;
    };
    Context.prototype.getPredicate = function (id) {
        if (this.predicateMap === null && this.where !== null) {
            this.predicateMap = Context.buildPredicateMap(this.where);
        }
        var predicate = this.predicateMap.get(id);
        assert(predicate !== undefined);
        return predicate;
    };
    Context.prototype.bind = function (values) {
        assert(this.clonedFrom === null);
        return this;
    };
    Context.prototype.bindValuesInSearchCondition = function (values) {
        var searchCondition = this.where;
        if (searchCondition !== null) {
            searchCondition.traverse(function (node) {
                if (node instanceof ValuePredicate) {
                    node.bind(values);
                }
            });
        }
    };
    Context.prototype.cloneBase = function (context) {
        if (context.where) {
            this.where = context.where.copy();
        }
        this.clonedFrom = context;
    };
    return Context;
}(UniqueId));
var PhysicalQueryPlanNode = (function (_super) {
    __extends(PhysicalQueryPlanNode, _super);
    function PhysicalQueryPlanNode(numRelations, execType) {
        var _this = _super.call(this) || this;
        _this.numRelations = numRelations;
        _this.execType = execType;
        return _this;
    }
    PhysicalQueryPlanNode.prototype.exec = function (journal, context) {
        switch (this.execType) {
            case ExecType.FIRST_CHILD:
                return this.execFirstChild(journal, context);
            case ExecType.ALL:
                return this.execAllChildren(journal, context);
            default:
                return this.execNoChild(journal, context);
        }
    };
    PhysicalQueryPlanNode.prototype.toString = function () {
        return 'dummy_node';
    };
    PhysicalQueryPlanNode.prototype.toContextString = function (context) {
        return this.toString();
    };
    PhysicalQueryPlanNode.prototype.assertInput = function (relations) {
        assert(this.numRelations === PhysicalQueryPlanNode.ANY ||
            relations.length === this.numRelations);
    };
    PhysicalQueryPlanNode.prototype.execNoChild = function (journal, context) {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this.execInternal([], journal, context));
        });
    };
    PhysicalQueryPlanNode.prototype.execFirstChild = function (journal, context) {
        var _this = this;
        return this.getChildAt(0)
            .exec(journal, context)
            .then(function (results) {
            _this.assertInput(results);
            return _this.execInternal(results, journal, context);
        });
    };
    PhysicalQueryPlanNode.prototype.execAllChildren = function (journal, context) {
        var _this = this;
        var promises = this.getChildren().map(function (child) {
            return child.exec(journal, context);
        });
        return Promise.all(promises).then(function (results) {
            var relations = [];
            results.forEach(function (result) {
                result.forEach(function (res) { return relations.push(res); });
            });
            _this.assertInput(relations);
            return _this.execInternal(relations, journal, context);
        });
    };
    PhysicalQueryPlanNode.ANY = -1;
    return PhysicalQueryPlanNode;
}(TreeNode));
var PhysicalQueryPlan = (function () {
    function PhysicalQueryPlan(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    PhysicalQueryPlan.getCombinedScope = function (plans) {
        var tableSet = new Set();
        plans.forEach(function (plan) {
            plan.getScope().forEach(tableSet.add.bind(tableSet));
        });
        return tableSet;
    };
    PhysicalQueryPlan.prototype.getRoot = function () {
        return this.rootNode;
    };
    PhysicalQueryPlan.prototype.getScope = function () {
        return this.scope;
    };
    return PhysicalQueryPlan;
}());
var LockTableEntry = (function () {
    function LockTableEntry() {
        this.exclusiveLock = null;
        this.reservedReadWriteLock = null;
        this.reservedReadOnlyLocks = null;
        this.sharedLocks = null;
    }
    LockTableEntry.prototype.releaseLock = function (taskId) {
        if (this.exclusiveLock === taskId) {
            this.exclusiveLock = null;
        }
        if (this.reservedReadWriteLock === taskId) {
            this.reservedReadWriteLock = null;
        }
        if (this.reservedReadOnlyLocks) {
            this.reservedReadOnlyLocks.delete(taskId);
        }
        if (this.sharedLocks) {
            this.sharedLocks.delete(taskId);
        }
    };
    LockTableEntry.prototype.canAcquireLock = function (taskId, lockType) {
        var noReservedReadOnlyLocksExist = this.reservedReadOnlyLocks === null ||
            this.reservedReadOnlyLocks.size === 0;
        if (lockType === LockType.EXCLUSIVE) {
            var noSharedLocksExist = this.sharedLocks === null || this.sharedLocks.size === 0;
            return (noSharedLocksExist &&
                noReservedReadOnlyLocksExist &&
                this.exclusiveLock === null &&
                this.reservedReadWriteLock !== null &&
                this.reservedReadWriteLock === taskId);
        }
        else if (lockType === LockType.SHARED) {
            return (this.exclusiveLock === null &&
                this.reservedReadWriteLock === null &&
                this.reservedReadOnlyLocks !== null &&
                this.reservedReadOnlyLocks.has(taskId));
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            return this.reservedReadWriteLock === null;
        }
        else {
            return (noReservedReadOnlyLocksExist &&
                (this.reservedReadWriteLock === null ||
                    this.reservedReadWriteLock === taskId));
        }
    };
    LockTableEntry.prototype.grantLock = function (taskId, lockType) {
        if (lockType === LockType.EXCLUSIVE) {
            this.reservedReadWriteLock = null;
            this.exclusiveLock = taskId;
        }
        else if (lockType === LockType.SHARED) {
            if (this.sharedLocks === null) {
                this.sharedLocks = new Set();
            }
            this.sharedLocks.add(taskId);
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.delete(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_ONLY) {
            if (this.reservedReadOnlyLocks === null) {
                this.reservedReadOnlyLocks = new Set();
            }
            this.reservedReadOnlyLocks.add(taskId);
        }
        else if (lockType === LockType.RESERVED_READ_WRITE) {
            this.reservedReadWriteLock = taskId;
        }
    };
    return LockTableEntry;
}());
var LockManager = (function () {
    function LockManager() {
        this.lockTable = new Map();
    }
    LockManager.prototype.requestLock = function (taskId, dataItems, lockType) {
        var canAcquireLock = this.canAcquireLock(taskId, dataItems, lockType);
        if (canAcquireLock) {
            this.grantLock(taskId, dataItems, lockType);
        }
        return canAcquireLock;
    };
    LockManager.prototype.releaseLock = function (taskId, dataItems) {
        var _this = this;
        dataItems.forEach(function (dataItem) { return _this.getEntry(dataItem).releaseLock(taskId); });
    };
    LockManager.prototype.clearReservedLocks = function (dataItems) {
        var _this = this;
        dataItems.forEach(function (dataItem) { return (_this.getEntry(dataItem).reservedReadWriteLock = null); });
    };
    LockManager.prototype.getEntry = function (dataItem) {
        var lockTableEntry = this.lockTable.get(dataItem.getName()) || null;
        if (lockTableEntry === null) {
            lockTableEntry = new LockTableEntry();
            this.lockTable.set(dataItem.getName(), lockTableEntry);
        }
        return lockTableEntry;
    };
    LockManager.prototype.grantLock = function (taskId, dataItems, lockType) {
        var _this = this;
        dataItems.forEach(function (dataItem) {
            return _this.getEntry(dataItem).grantLock(taskId, lockType);
        });
    };
    LockManager.prototype.canAcquireLock = function (taskId, dataItems, lockType) {
        var _this = this;
        var canAcquireLock = true;
        dataItems.forEach(function (dataItem) {
            if (canAcquireLock) {
                var lockTableEntry = _this.getEntry(dataItem);
                canAcquireLock = lockTableEntry.canAcquireLock(taskId, lockType);
            }
        }, this);
        return canAcquireLock;
    };
    return LockManager;
}());
var Resolver = (function () {
    function Resolver() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolveFn = resolve;
            _this.rejectFn = reject;
        });
    }
    Resolver.prototype.resolve = function (value) {
        this.resolveFn(value);
    };
    Resolver.prototype.reject = function (reason) {
        this.rejectFn(reason);
    };
    return Resolver;
}());
var ArrayHelper = (function () {
    function ArrayHelper() {
    }
    ArrayHelper.binaryInsert = function (arr, value, comparator) {
        var index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            arr.splice(-(index + 1), 0, value);
            return true;
        }
        return false;
    };
    ArrayHelper.binaryRemove = function (arr, value, comparator) {
        var index = ArrayHelper.binarySearch(arr, value, comparator);
        if (index < 0) {
            return false;
        }
        arr.splice(index, 1);
        return true;
    };
    ArrayHelper.shuffle = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    };
    ArrayHelper.clone = function (arr) {
        var length = arr.length;
        if (length > 0) {
            var rv_1 = new Array(length);
            arr.forEach(function (v, i) { return (rv_1[i] = v); });
            return rv_1;
        }
        return [];
    };
    ArrayHelper.flatten = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var CHUNK_SIZE = 8192;
        var result = [];
        arr.forEach(function (element) {
            if (Array.isArray(element)) {
                for (var c = 0; c < element.length; c += CHUNK_SIZE) {
                    var chunk = element.slice(c, c + CHUNK_SIZE);
                    var recurseResult = ArrayHelper.flatten.apply(null, chunk);
                    recurseResult.forEach(function (r) { return result.push(r); });
                }
            }
            else {
                result.push(element);
            }
        });
        return result;
    };
    ArrayHelper.product = function (arrays) {
        var someArrayEmpty = arrays.some(function (arr) { return !arr.length; });
        if (someArrayEmpty || arrays.length === 0) {
            return [];
        }
        var indices = new Array(arrays.length);
        indices.fill(0);
        var result = [];
        while (indices !== null) {
            result.push(indices.map(function (valueIndex, arrayIndex) { return arrays[arrayIndex][valueIndex]; }));
            for (var i = indices.length - 1; i >= 0; i--) {
                assert(indices !== null);
                if (indices[i] < arrays[i].length - 1) {
                    indices[i]++;
                    break;
                }
                if (i === 0) {
                    indices = null;
                    break;
                }
                indices[i] = 0;
            }
        }
        return result;
    };
    ArrayHelper.bucket = function (arr, sorter) {
        var bucket = {};
        arr.forEach(function (v) {
            var key = sorter(v);
            if (bucket[key] === undefined) {
                bucket[key] = [];
            }
            bucket[key].push(v);
        });
        return bucket;
    };
    ArrayHelper.binarySearch = function (arr, value, comparator) {
        var left = 0;
        var right = arr.length;
        var comp = comparator ||
            ArrayHelper.defaultComparator;
        while (left < right) {
            var middle = (left + right) >> 1;
            if (comp(arr[middle], value) < 0) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        return left === right && arr[left] === value ? left : ~left;
    };
    ArrayHelper.defaultComparator = function (lhs, rhs) {
        return lhs - rhs;
    };
    return ArrayHelper;
}());
var TaskQueue = (function () {
    function TaskQueue() {
        this.queue = [];
    }
    TaskQueue.prototype.insert = function (task) {
        ArrayHelper.binaryInsert(this.queue, task, function (t1, t2) {
            var priorityDiff = t1.getPriority() - t2.getPriority();
            return priorityDiff === 0 ? t1.getId() - t2.getId() : priorityDiff;
        });
    };
    TaskQueue.prototype.getValues = function () {
        return this.queue.slice();
    };
    TaskQueue.prototype.remove = function (task) {
        var i = this.queue.indexOf(task);
        if (i >= 0) {
            this.queue.splice(i, 1);
        }
        return i >= 0;
    };
    return TaskQueue;
}());
var Runner = (function () {
    function Runner() {
        this.queue = new TaskQueue();
        this.lockManager = new LockManager();
    }
    Runner.prototype.scheduleTask = function (task) {
        if (task.getPriority() < TaskPriority.USER_QUERY_TASK ||
            task.getPriority() < TaskPriority.TRANSACTION_TASK) {
            this.lockManager.clearReservedLocks(task.getScope());
        }
        this.queue.insert(task);
        this.consumePending();
        return task.getResolver().promise;
    };
    Runner.prototype.consumePending = function () {
        var _this = this;
        var queue = this.queue.getValues();
        queue.forEach(function (task) {
            var acquiredLock = false;
            if (task.getType() === TransactionType.READ_ONLY) {
                acquiredLock = _this.requestTwoPhaseLock(task, LockType.RESERVED_READ_ONLY, LockType.SHARED);
            }
            else {
                acquiredLock = _this.requestTwoPhaseLock(task, LockType.RESERVED_READ_WRITE, LockType.EXCLUSIVE);
            }
            if (acquiredLock) {
                _this.queue.remove(task);
                _this.execTask(task);
            }
        });
    };
    Runner.prototype.requestTwoPhaseLock = function (task, lockType1, lockType2) {
        var acquiredLock = false;
        var acquiredFirstLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType1);
        if (acquiredFirstLock) {
            acquiredLock = this.lockManager.requestLock(task.getId(), task.getScope(), lockType2);
        }
        return acquiredLock;
    };
    Runner.prototype.execTask = function (task) {
        task
            .exec()
            .then(this.onTaskSuccess.bind(this, task), this.onTaskError.bind(this, task));
    };
    Runner.prototype.onTaskSuccess = function (task, results) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().resolve(results);
        this.consumePending();
    };
    Runner.prototype.onTaskError = function (task, error) {
        this.lockManager.releaseLock(task.getId(), task.getScope());
        task.getResolver().reject(error);
        this.consumePending();
    };
    return Runner;
}());
var NonPredicateProvider = (function () {
    function NonPredicateProvider() {
    }
    NonPredicateProvider.prototype.eq = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.neq = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.lt = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.lte = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.gt = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.gte = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.match = function (operand) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.between = function (from, to) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.in = function (values) {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.isNull = function () {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    NonPredicateProvider.prototype.isNotNull = function () {
        throw new Exception(ErrorCode.SYNTAX_ERROR);
    };
    return NonPredicateProvider;
}());
var AggregatedColumn = (function (_super) {
    __extends(AggregatedColumn, _super);
    function AggregatedColumn(child, aggregatorType) {
        var _this = _super.call(this) || this;
        _this.child = child;
        _this.aggregatorType = aggregatorType;
        _this.alias = null;
        return _this;
    }
    AggregatedColumn.prototype.getName = function () {
        return "".concat(this.aggregatorType, "(").concat(this.child.getName(), ")");
    };
    AggregatedColumn.prototype.getNormalizedName = function () {
        return "".concat(this.aggregatorType, "(").concat(this.child.getNormalizedName(), ")");
    };
    AggregatedColumn.prototype.getTable = function () {
        return this.child.getTable();
    };
    AggregatedColumn.prototype.toString = function () {
        return this.getNormalizedName();
    };
    AggregatedColumn.prototype.getType = function () {
        return this.child.getType();
    };
    AggregatedColumn.prototype.getAlias = function () {
        return this.alias;
    };
    AggregatedColumn.prototype.getIndices = function () {
        return [];
    };
    AggregatedColumn.prototype.getIndex = function () {
        return null;
    };
    AggregatedColumn.prototype.isNullable = function () {
        return false;
    };
    AggregatedColumn.prototype.isUnique = function () {
        return false;
    };
    AggregatedColumn.prototype.as = function (name) {
        this.alias = name;
        return this;
    };
    AggregatedColumn.prototype.getColumnChain = function () {
        var columnChain = [this];
        var currentColumn = this;
        while (currentColumn instanceof AggregatedColumn) {
            columnChain.push(currentColumn.child);
            currentColumn = currentColumn.child;
        }
        return columnChain;
    };
    return AggregatedColumn;
}(NonPredicateProvider));
var TreeHelper = (function () {
    function TreeHelper() {
    }
    TreeHelper.map = function (origTree, mapFn) {
        var copyParentStack = [];
        var cleanUpParentStack = function (original, clone) {
            if (original === null) {
                return;
            }
            var cloneFull = original.getChildCount() === clone.getChildCount();
            if (cloneFull) {
                var cloneIndex = copyParentStack.indexOf(clone);
                if (cloneIndex !== -1) {
                    copyParentStack.splice(cloneIndex, 1);
                }
            }
        };
        var nextParent = null;
        var copyRoot = null;
        origTree.traverse(function (node) {
            var newNode = mapFn(node);
            if (node.getParent() === null) {
                copyRoot = newNode;
            }
            else {
                nextParent.addChild(newNode);
            }
            cleanUpParentStack(node.getParent(), nextParent);
            if (node.getChildCount() > 1) {
                copyParentStack.push(newNode);
            }
            nextParent = node.isLeaf()
                ? copyParentStack[copyParentStack.length - 1]
                : newNode;
        });
        return copyRoot;
    };
    TreeHelper.getLeafNodes = function (node) {
        return TreeHelper.find(node, function (n) { return n.isLeaf(); });
    };
    TreeHelper.removeNode = function (node) {
        var parentNode = node.getParent();
        var originalIndex = 0;
        if (parentNode !== null) {
            originalIndex = parentNode.getChildren().indexOf(node);
            parentNode.removeChild(node);
        }
        var children = node.getChildren().slice();
        children.forEach(function (child, index) {
            node.removeChild(child);
            if (parentNode !== null) {
                parentNode.addChildAt(child, originalIndex + index);
            }
        });
        return {
            children: children,
            parent: parentNode,
        };
    };
    TreeHelper.insertNodeAt = function (existingNode, newNode) {
        var children = existingNode.getChildren().slice();
        children.forEach(function (child) {
            existingNode.removeChild(child);
            newNode.addChild(child);
        });
        existingNode.addChild(newNode);
    };
    TreeHelper.swapNodeWithChild = function (node) {
        assert(node.getChildCount() === 1);
        var child = node.getChildAt(0);
        assert(child.getChildCount() === 1);
        TreeHelper.removeNode(node);
        TreeHelper.insertNodeAt(child, node);
        return child;
    };
    TreeHelper.pushNodeBelowChild = function (node, shouldPushDownFn, cloneFn) {
        assert(node.getChildCount() === 1);
        var child = node.getChildAt(0);
        assert(child.getChildCount() > 1);
        var grandChildren = child.getChildren().slice();
        var canPushDown = grandChildren.some(function (grandChild) {
            return shouldPushDownFn(grandChild);
        });
        if (!canPushDown) {
            return node;
        }
        TreeHelper.removeNode(node);
        grandChildren.forEach(function (grandChild, index) {
            if (shouldPushDownFn(grandChild)) {
                var newNode = cloneFn(node);
                child.removeChildAt(index);
                newNode.addChild(grandChild);
                child.addChildAt(newNode, index);
            }
        });
        return child;
    };
    TreeHelper.replaceChainWithChain = function (oldHead, oldTail, newHead, newTail) {
        var parentNode = oldHead.getParent();
        if (parentNode !== null) {
            var oldHeadIndex = parentNode.getChildren().indexOf(oldHead);
            parentNode.removeChildAt(oldHeadIndex);
            parentNode.addChildAt(newHead, oldHeadIndex);
        }
        oldTail
            .getChildren()
            .slice()
            .forEach(function (child) {
            oldTail.removeChild(child);
            newTail.addChild(child);
        });
        return newHead;
    };
    TreeHelper.replaceNodeWithChain = function (node, head, tail) {
        return TreeHelper.replaceChainWithChain(node, node, head, tail);
    };
    TreeHelper.replaceChainWithNode = function (head, tail, node) {
        return TreeHelper.replaceChainWithChain(head, tail, node, node);
    };
    TreeHelper.find = function (root, filterFn, stopFn) {
        var results = [];
        var filterRec = function (node) {
            if (filterFn(node)) {
                results.push(node);
            }
            if (stopFn === undefined || stopFn === null || !stopFn(node)) {
                node.getChildren().forEach(filterRec);
            }
        };
        filterRec(root);
        return results;
    };
    TreeHelper.toString = function (rootNode, stringFunc) {
        var defaultStringFn = function (node) {
            return node.toString() + '\n';
        };
        var stringFn = stringFunc || defaultStringFn;
        var out = '';
        rootNode.traverse(function (node) {
            for (var i = 0; i < node.getDepth(); i++) {
                out += '-';
            }
            out += stringFn(node);
        });
        return out;
    };
    return TreeHelper;
}());
var CombinedPredicate = (function (_super) {
    __extends(CombinedPredicate, _super);
    function CombinedPredicate(operator) {
        var _this = _super.call(this) || this;
        _this.operator = operator;
        _this.isComplement = false;
        return _this;
    }
    CombinedPredicate.prototype.eval = function (relation) {
        var results = this.getChildren().map(function (condition) {
            return condition.eval(relation);
        });
        return this.combineResults(results);
    };
    CombinedPredicate.prototype.setComplement = function (isComplement) {
        if (this.isComplement === isComplement) {
            return;
        }
        this.isComplement = isComplement;
        this.operator = this.operator === Operator.AND ? Operator.OR : Operator.AND;
        this.getChildren().forEach(function (condition) {
            return condition.setComplement(isComplement);
        });
    };
    CombinedPredicate.prototype.copy = function () {
        var copy = TreeHelper.map(this, function (node) {
            if (node instanceof CombinedPredicate) {
                var tempCopy = new CombinedPredicate(node.operator);
                tempCopy.isComplement = node.isComplement;
                tempCopy.setId(node.getId());
                return tempCopy;
            }
            else {
                return node.copy();
            }
        });
        return copy;
    };
    CombinedPredicate.prototype.getColumns = function (results) {
        var _this = this;
        var columns = results || [];
        this.traverse(function (child) {
            if (child === _this) {
                return;
            }
            child.getColumns(columns);
        });
        var columnSet = new Set(columns);
        return Array.from(columnSet.values());
    };
    CombinedPredicate.prototype.getTables = function (results) {
        var _this = this;
        var tables = results ? results : new Set();
        this.traverse(function (child) {
            if (child === _this) {
                return;
            }
            child.getTables(tables);
        });
        return tables;
    };
    CombinedPredicate.prototype.toString = function () {
        return "combined_pred_".concat(this.operator.toString());
    };
    CombinedPredicate.prototype.toKeyRange = function () {
        assert(this.isKeyRangeCompatible(), 'Could not convert combined predicate to key range.');
        if (this.operator === Operator.OR) {
            var keyRangeSet_1 = new SingleKeyRangeSet();
            this.getChildren().forEach(function (child) {
                var childKeyRanges = child
                    .toKeyRange()
                    .getValues();
                keyRangeSet_1.add(childKeyRanges);
            });
            return keyRangeSet_1;
        }
        else {
            assert(false, 'toKeyRange() called for an AND predicate.');
            return new SingleKeyRangeSet();
        }
    };
    CombinedPredicate.prototype.isKeyRangeCompatible = function () {
        if (this.operator === Operator.OR) {
            return this.isKeyRangeCompatibleOr();
        }
        return false;
    };
    CombinedPredicate.prototype.combineResults = function (results) {
        if (this.operator === Operator.AND) {
            return Relation.intersect(results);
        }
        else {
            return Relation.union(results);
        }
    };
    CombinedPredicate.prototype.isKeyRangeCompatibleOr = function () {
        var predicateColumn = null;
        return this.getChildren().every(function (child) {
            var isCandidate = child instanceof ValuePredicate && child.isKeyRangeCompatible();
            if (!isCandidate) {
                return false;
            }
            if (predicateColumn === null) {
                predicateColumn = child.column;
            }
            return (predicateColumn.getNormalizedName() ===
                child.column.getNormalizedName());
        });
    };
    return CombinedPredicate;
}(PredicateNode));
var op = (function () {
    function op() {
    }
    op.and = function () {
        var predicates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            predicates[_i] = arguments[_i];
        }
        return op.createPredicate(Operator.AND, predicates);
    };
    op.or = function () {
        var predicates = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            predicates[_i] = arguments[_i];
        }
        return op.createPredicate(Operator.OR, predicates);
    };
    op.not = function (operand) {
        operand.setComplement(true);
        return operand;
    };
    op.createPredicate = function (operator, predicates) {
        var condition = new CombinedPredicate(operator);
        predicates.forEach(function (predicate) { return condition.addChild(predicate); });
        return condition;
    };
    return op;
}());
exports.op = op;
var MapSet = (function () {
    function MapSet() {
        this.map = new Map();
        this.count = 0;
    }
    Object.defineProperty(MapSet.prototype, "size", {
        get: function () {
            return this.count;
        },
        enumerable: false,
        configurable: true
    });
    MapSet.prototype.has = function (key) {
        return this.map.has(key);
    };
    MapSet.prototype.set = function (key, value) {
        var valueSet = this.getSet(key);
        if (!valueSet.has(value)) {
            valueSet.add(value);
            this.count++;
        }
        return this;
    };
    MapSet.prototype.setMany = function (key, values) {
        var _this = this;
        var valueSet = this.getSet(key);
        values.forEach(function (value) {
            if (!valueSet.has(value)) {
                valueSet.add(value);
                _this.count++;
            }
        });
        return this;
    };
    MapSet.prototype.merge = function (mapSet) {
        var _this = this;
        mapSet
            .keys()
            .forEach(function (key) { return _this.setMany(key, Array.from(mapSet.getSet(key))); });
        return this;
    };
    MapSet.prototype.delete = function (key, value) {
        var valueSet = this.map.get(key) || null;
        if (valueSet === null) {
            return false;
        }
        var didRemove = valueSet.delete(value);
        if (didRemove) {
            this.count--;
            if (valueSet.size === 0) {
                this.map.delete(key);
            }
        }
        return didRemove;
    };
    MapSet.prototype.get = function (key) {
        var valueSet = this.map.get(key) || null;
        return valueSet === null ? null : Array.from(valueSet);
    };
    MapSet.prototype.clear = function () {
        this.map.clear();
        this.count = 0;
    };
    MapSet.prototype.keys = function () {
        return Array.from(this.map.keys());
    };
    MapSet.prototype.values = function () {
        var results = [];
        this.map.forEach(function (valueSet) { return results.push.apply(results, Array.from(valueSet)); });
        return results;
    };
    MapSet.prototype.getSet = function (key) {
        var valueSet = this.map.get(key) || null;
        if (valueSet === null) {
            valueSet = new Set();
            this.map.set(key, valueSet);
        }
        return valueSet;
    };
    return MapSet;
}());
var JoinPredicate = (function (_super) {
    __extends(JoinPredicate, _super);
    function JoinPredicate(leftColumn, rightColumn, evaluatorType) {
        var _this = _super.call(this) || this;
        _this.leftColumn = leftColumn;
        _this.rightColumn = rightColumn;
        _this.evaluatorType = evaluatorType;
        _this.nullPayload = null;
        var registry = EvalRegistry.get();
        _this.evaluatorFn = registry.getEvaluator(_this.leftColumn.getType(), _this.evaluatorType);
        _this.keyOfIndexFn = registry.getKeyOfIndexEvaluator(_this.leftColumn.getType());
        return _this;
    }
    JoinPredicate.prototype.copy = function () {
        var clone = new JoinPredicate(this.leftColumn, this.rightColumn, this.evaluatorType);
        clone.setId(this.getId());
        return clone;
    };
    JoinPredicate.prototype.getColumns = function (results) {
        if (results !== undefined && results !== null) {
            results.push(this.leftColumn);
            results.push(this.rightColumn);
            return results;
        }
        return [this.leftColumn, this.rightColumn];
    };
    JoinPredicate.prototype.getTables = function (results) {
        var tables = results !== undefined && results !== null
            ? results
            : new Set();
        tables.add(this.leftColumn.getTable());
        tables.add(this.rightColumn.getTable());
        return tables;
    };
    JoinPredicate.prototype.reverse = function () {
        var evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
            default:
                break;
        }
        var newPredicate = new JoinPredicate(this.rightColumn, this.leftColumn, evaluatorType);
        return newPredicate;
    };
    JoinPredicate.prototype.eval = function (relation) {
        var _this = this;
        var entries = relation.entries.filter(function (entry) {
            var leftValue = entry.getField(_this.leftColumn);
            var rightValue = entry.getField(_this.rightColumn);
            return _this.evaluatorFn(leftValue, rightValue);
        }, this);
        return new Relation(entries, relation.getTables());
    };
    JoinPredicate.prototype.toString = function () {
        return ('join_pred(' +
            this.leftColumn.getNormalizedName() +
            ' ' +
            this.evaluatorType +
            ' ' +
            this.rightColumn.getNormalizedName() +
            ')');
    };
    JoinPredicate.prototype.evalRelationsNestedLoopJoin = function (leftRelation, rightRelation, isOuterJoin) {
        var leftRightRelations = [leftRelation, rightRelation];
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        var combinedEntries = [];
        var leftRelationTables = leftRelation.getTables();
        var rightRelationTables = rightRelation.getTables();
        var leftEntriesLength = leftRelation.entries.length;
        var rightEntriesLength = rightRelation.entries.length;
        var blockNumBits = JoinPredicate.BLOCK_SIZE_EXPONENT;
        var blockCount = (rightEntriesLength + (1 << blockNumBits) - 1) >> blockNumBits;
        var currentBlock = 0;
        while (currentBlock < blockCount) {
            for (var i = 0; i < leftEntriesLength; i++) {
                var matchFound = false;
                var leftValue = leftRelation.entries[i].getField(this.leftColumn);
                if (leftValue !== null) {
                    var rightLimit = Math.min((currentBlock + 1) << blockNumBits, rightEntriesLength);
                    for (var j = currentBlock << blockNumBits; j < rightLimit; j++) {
                        var predicateResult = this.evaluatorFn(leftValue, rightRelation.entries[j].getField(this.rightColumn));
                        if (predicateResult) {
                            matchFound = true;
                            var combinedEntry = RelationEntry.combineEntries(leftRelation.entries[i], leftRelationTables, rightRelation.entries[j], rightRelationTables);
                            combinedEntries.push(combinedEntry);
                        }
                    }
                }
                if (isOuterJoin && !matchFound) {
                    combinedEntries.push(this.createCombinedEntryForUnmatched(leftRelation.entries[i], leftRelationTables));
                }
            }
            currentBlock++;
        }
        var srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    };
    JoinPredicate.prototype.evalRelationsHashJoin = function (leftRelation, rightRelation, isOuterJoin) {
        var _this = this;
        var leftRightRelations = [leftRelation, rightRelation];
        if (!isOuterJoin) {
            leftRightRelations = this.detectLeftRight(leftRelation, rightRelation);
        }
        leftRelation = leftRightRelations[0];
        rightRelation = leftRightRelations[1];
        var minRelation = leftRelation;
        var maxRelation = rightRelation;
        var minColumn = this.leftColumn;
        var maxColumn = this.rightColumn;
        if (isOuterJoin) {
            minRelation = rightRelation;
            maxRelation = leftRelation;
            minColumn = this.rightColumn;
            maxColumn = this.leftColumn;
        }
        var map = new MapSet();
        var combinedEntries = [];
        minRelation.entries.forEach(function (entry) {
            var key = String(entry.getField(minColumn));
            map.set(key, entry);
        });
        var minRelationTableNames = minRelation.getTables();
        var maxRelationTableNames = maxRelation.getTables();
        maxRelation.entries.forEach(function (entry) {
            var value = entry.getField(maxColumn);
            var key = String(value);
            if (value !== null && map.has(key)) {
                map.get(key).forEach(function (innerEntry) {
                    var combinedEntry = RelationEntry.combineEntries(entry, maxRelationTableNames, innerEntry, minRelationTableNames);
                    combinedEntries.push(combinedEntry);
                });
            }
            else {
                if (isOuterJoin) {
                    combinedEntries.push(_this.createCombinedEntryForUnmatched(entry, maxRelationTableNames));
                }
            }
        }, this);
        var srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    };
    JoinPredicate.prototype.evalRelationsIndexNestedLoopJoin = function (leftRelation, rightRelation, indexJoinInfo, cache) {
        var _this = this;
        assert(this.evaluatorType === EvalType.EQ, 'For now, index nested loop join can only be leveraged for EQ.');
        var indexedTable = indexJoinInfo.indexedColumn.getTable();
        var outerRelation = leftRelation;
        var innerRelation = rightRelation;
        if (leftRelation.getTables().indexOf(indexedTable.getEffectiveName()) !== -1) {
            outerRelation = rightRelation;
            innerRelation = leftRelation;
        }
        var combinedEntries = [];
        var innerRelationTables = innerRelation.getTables();
        var outerRelationTables = outerRelation.getTables();
        function pushCombinedEntry(outerEntry, row) {
            var innerEntry = new RelationEntry(row, innerRelationTables.length > 1);
            var combinedEntry = RelationEntry.combineEntries(outerEntry, outerRelationTables, innerEntry, innerRelationTables);
            combinedEntries.push(combinedEntry);
        }
        outerRelation.entries.forEach(function (entry) {
            var keyOfIndex = _this.keyOfIndexFn(entry.getField(indexJoinInfo.nonIndexedColumn));
            var matchingRowIds = indexJoinInfo.index.get(keyOfIndex);
            if (matchingRowIds.length === 0) {
                return;
            }
            if (indexJoinInfo.index.isUniqueKey()) {
                pushCombinedEntry(entry, cache.get(matchingRowIds[0]));
            }
            else {
                var rows = cache.getMany(matchingRowIds);
                rows.forEach(function (r) { return pushCombinedEntry(entry, r); });
            }
        }, this);
        var srcTables = outerRelation
            .getTables()
            .concat(innerRelation.getTables());
        return new Relation(combinedEntries, srcTables);
    };
    JoinPredicate.prototype.setComplement = function (isComplement) {
        throw new Exception(ErrorCode.ASSERTION, 'Join predicate has no complement');
    };
    JoinPredicate.prototype.reverseSelf = function () {
        var temp = this.leftColumn;
        this.leftColumn = this.rightColumn;
        this.rightColumn = temp;
        var evaluatorType = this.evaluatorType;
        switch (this.evaluatorType) {
            case EvalType.GT:
                evaluatorType = EvalType.LT;
                break;
            case EvalType.LT:
                evaluatorType = EvalType.GT;
                break;
            case EvalType.GTE:
                evaluatorType = EvalType.LTE;
                break;
            case EvalType.LTE:
                evaluatorType = EvalType.GTE;
                break;
            default:
                return;
        }
        this.evaluatorType = evaluatorType;
        this.evaluatorFn = EvalRegistry.get().getEvaluator(this.leftColumn.getType(), this.evaluatorType);
    };
    JoinPredicate.prototype.appliesToLeft = function (relation) {
        return (relation
            .getTables()
            .indexOf(this.leftColumn.getTable().getEffectiveName()) !== -1);
    };
    JoinPredicate.prototype.appliesToRight = function (relation) {
        return (relation
            .getTables()
            .indexOf(this.rightColumn.getTable().getEffectiveName()) !== -1);
    };
    JoinPredicate.prototype.assertRelationsApply = function (left, right) {
        assert(this.appliesToLeft(left), 'Mismatch between join predicate left operand and right relation.');
        assert(this.appliesToRight(right), 'Mismatch between join predicate right operand and right relation.');
    };
    JoinPredicate.prototype.detectLeftRight = function (relation1, relation2) {
        var left = null;
        var right = null;
        if (this.appliesToLeft(relation1)) {
            this.assertRelationsApply(relation1, relation2);
            left = relation1;
            right = relation2;
        }
        else {
            this.assertRelationsApply(relation2, relation1);
            left = relation2;
            right = relation1;
        }
        if (left.entries.length > right.entries.length) {
            this.reverseSelf();
            this.assertRelationsApply(right, left);
            return [right, left];
        }
        return [left, right];
    };
    JoinPredicate.prototype.createNullPayload = function (table) {
        var payload = {};
        table.getColumns().forEach(function (column) { return (payload[column.getName()] = null); });
        return payload;
    };
    JoinPredicate.prototype.createCombinedEntryForUnmatched = function (entry, leftRelationTables) {
        if (this.nullPayload === null) {
            this.nullPayload = this.createNullPayload(this.rightColumn.getTable());
        }
        var nullEntry = new RelationEntry(new Row(Row.DUMMY_ID, this.nullPayload), false);
        var combinedEntry = RelationEntry.combineEntries(entry, leftRelationTables, nullEntry, [this.rightColumn.getTable().getEffectiveName()]);
        return combinedEntry;
    };
    JoinPredicate.BLOCK_SIZE_EXPONENT = 8;
    return JoinPredicate;
}(PredicateNode));
var SelectContext = (function (_super) {
    __extends(SelectContext, _super);
    function SelectContext(dbSchema) {
        return _super.call(this, dbSchema) || this;
    }
    SelectContext.orderByToString = function (orderBy) {
        var out = '';
        orderBy.forEach(function (orderByEl, index) {
            out += orderByEl.column.getNormalizedName() + ' ';
            out += orderByEl.order === Order.ASC ? 'ASC' : 'DESC';
            if (index < orderBy.length - 1) {
                out += ', ';
            }
        });
        return out;
    };
    SelectContext.prototype.getScope = function () {
        return new Set(this.from);
    };
    SelectContext.prototype.clone = function () {
        var context = new SelectContext(this.schema);
        context.cloneBase(this);
        if (this.columns) {
            context.columns = this.columns.slice();
        }
        if (this.from) {
            context.from = this.from.slice();
        }
        context.limit = this.limit;
        context.skip = this.skip;
        if (this.orderBy) {
            context.orderBy = this.orderBy.slice();
        }
        if (this.groupBy) {
            context.groupBy = this.groupBy.slice();
        }
        if (this.limitBinder) {
            context.limitBinder = this.limitBinder;
        }
        if (this.skipBinder) {
            context.skipBinder = this.skipBinder;
        }
        context.outerJoinPredicates = this.outerJoinPredicates;
        return context;
    };
    SelectContext.prototype.bind = function (values) {
        _super.prototype.bind.call(this, values);
        if (this.limitBinder !== undefined && this.limitBinder !== null) {
            this.limit = values[this.limitBinder.index];
        }
        if (this.skipBinder !== undefined && this.skipBinder !== null) {
            this.skip = values[this.skipBinder.index];
        }
        this.bindValuesInSearchCondition(values);
        return this;
    };
    return SelectContext;
}(Context));
var TransactionStatsImpl = (function () {
    function TransactionStatsImpl(success_, insertedRowCount_, updatedRowCount_, deletedRowCount_, changedTableCount_) {
        this.success_ = success_;
        this.insertedRowCount_ = insertedRowCount_;
        this.updatedRowCount_ = updatedRowCount_;
        this.deletedRowCount_ = deletedRowCount_;
        this.changedTableCount_ = changedTableCount_;
    }
    TransactionStatsImpl.getDefault = function () {
        return new TransactionStatsImpl(false, 0, 0, 0, 0);
    };
    TransactionStatsImpl.prototype.success = function () {
        return this.success_;
    };
    TransactionStatsImpl.prototype.insertedRowCount = function () {
        return this.insertedRowCount_;
    };
    TransactionStatsImpl.prototype.updatedRowCount = function () {
        return this.updatedRowCount_;
    };
    TransactionStatsImpl.prototype.deletedRowCount = function () {
        return this.deletedRowCount_;
    };
    TransactionStatsImpl.prototype.changedTableCount = function () {
        return this.changedTableCount_;
    };
    return TransactionStatsImpl;
}());
var QueryTask = (function (_super) {
    __extends(QueryTask, _super);
    function QueryTask(global, items) {
        var _this = _super.call(this) || this;
        _this.global = global;
        _this.backStore = global.getService(Service.BACK_STORE);
        _this.queries = items.map(function (item) { return item.context; });
        _this.plans = items.map(function (item) { return item.plan; });
        _this.combinedScope = PhysicalQueryPlan.getCombinedScope(_this.plans);
        _this.txType = _this.detectType();
        _this.resolver = new Resolver();
        return _this;
    }
    QueryTask.prototype.exec = function () {
        var _this = this;
        var journal = this.txType === TransactionType.READ_ONLY
            ? undefined
            : new Journal(this.global, this.combinedScope);
        var results = [];
        var remainingPlans = this.plans.slice();
        var queries = this.queries;
        var sequentiallyExec = function () {
            var plan = remainingPlans.shift();
            if (plan) {
                var queryContext = queries[results.length];
                return plan
                    .getRoot()
                    .exec(journal, queryContext)
                    .then(function (relations) {
                    results.push(relations[0]);
                    return sequentiallyExec();
                });
            }
            return Promise.resolve(results);
        };
        return sequentiallyExec()
            .then(function () {
            _this.tx = _this.backStore.createTx(_this.txType, Array.from(_this.combinedScope.values()), journal);
            return _this.tx.commit();
        })
            .then(function () {
            _this.onSuccess(results);
            return results;
        }, function (e) {
            if (journal) {
                journal.rollback();
            }
            throw e;
        });
    };
    QueryTask.prototype.getType = function () {
        return this.txType;
    };
    QueryTask.prototype.getScope = function () {
        return this.combinedScope;
    };
    QueryTask.prototype.getResolver = function () {
        return this.resolver;
    };
    QueryTask.prototype.getId = function () {
        return this.getUniqueNumber();
    };
    QueryTask.prototype.stats = function () {
        var results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    };
    QueryTask.prototype.onSuccess = function (results) {
    };
    QueryTask.prototype.detectType = function () {
        return this.queries.some(function (query) { return !(query instanceof SelectContext); })
            ? TransactionType.READ_WRITE
            : TransactionType.READ_ONLY;
    };
    return QueryTask;
}(UniqueId));
var ObserverQueryTask = (function (_super) {
    __extends(ObserverQueryTask, _super);
    function ObserverQueryTask(global, items) {
        var _this = _super.call(this, global, items) || this;
        _this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
        return _this;
    }
    ObserverQueryTask.prototype.getPriority = function () {
        return TaskPriority.OBSERVER_QUERY_TASK;
    };
    ObserverQueryTask.prototype.onSuccess = function (results) {
        var _this = this;
        this.queries.forEach(function (query, index) {
            _this.observerRegistry.updateResultsForQuery(query, results[index]);
        });
    };
    return ObserverQueryTask;
}(QueryTask));
var UserQueryTask = (function (_super) {
    __extends(UserQueryTask, _super);
    function UserQueryTask(global, items) {
        var _this = _super.call(this, global, items) || this;
        _this.runner = global.getService(Service.RUNNER);
        _this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
        return _this;
    }
    UserQueryTask.prototype.getPriority = function () {
        return TaskPriority.USER_QUERY_TASK;
    };
    UserQueryTask.prototype.onSuccess = function (results) {
        this.getType() === TransactionType.READ_ONLY
            ? this.notifyObserversDirectly(results)
            : this.scheduleObserverTask();
    };
    UserQueryTask.prototype.notifyObserversDirectly = function (results) {
        var _this = this;
        this.queries.forEach(function (query, index) {
            _this.observerRegistry.updateResultsForQuery(query, results[index]);
        });
    };
    UserQueryTask.prototype.scheduleObserverTask = function () {
        var items = this.observerRegistry.getTaskItemsForTables(Array.from(this.getScope().values()));
        if (items.length > 0) {
            this.runner.scheduleTask(new ObserverQueryTask(this.global, items));
        }
    };
    return UserQueryTask;
}(QueryTask));
var DatabaseSchemaImpl = (function () {
    function DatabaseSchemaImpl(_name, _version) {
        this._name = _name;
        this._version = _version;
        this.tableMap = new Map();
        this._pragma = { enableBundledMode: false };
        this._info = undefined;
    }
    DatabaseSchemaImpl.prototype.name = function () {
        return this._name;
    };
    DatabaseSchemaImpl.prototype.version = function () {
        return this._version;
    };
    DatabaseSchemaImpl.prototype.info = function () {
        if (this._info === undefined) {
            this._info = new Info(this);
        }
        return this._info;
    };
    DatabaseSchemaImpl.prototype.tables = function () {
        return Array.from(this.tableMap.values());
    };
    DatabaseSchemaImpl.prototype.table = function (tableName) {
        var ret = this.tableMap.get(tableName);
        if (!ret) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return ret;
    };
    DatabaseSchemaImpl.prototype.setTable = function (table) {
        this.tableMap.set(table.getName(), table);
    };
    DatabaseSchemaImpl.prototype.pragma = function () {
        return this._pragma;
    };
    return DatabaseSchemaImpl;
}());
var Info = (function () {
    function Info(dbSchema) {
        var _this = this;
        this.dbSchema = dbSchema;
        this.cascadeReferringFk = new MapSet();
        this.restrictReferringFk = new MapSet();
        this.parents = new MapSet();
        this.colParent = new Map();
        this.children = new MapSet();
        this.cascadeChildren = new MapSet();
        this.restrictChildren = new MapSet();
        this.colChild = new MapSet();
        this.dbSchema.tables().forEach(function (t) {
            var table = t;
            var tableName = table.getName();
            table
                .getConstraint()
                .getForeignKeys()
                .forEach(function (fkSpec) {
                _this.parents.set(tableName, _this.dbSchema.table(fkSpec.parentTable));
                _this.children.set(fkSpec.parentTable, table);
                if (fkSpec.action === ConstraintAction.RESTRICT) {
                    _this.restrictReferringFk.set(fkSpec.parentTable, fkSpec);
                    _this.restrictChildren.set(fkSpec.parentTable, table);
                }
                else {
                    _this.cascadeReferringFk.set(fkSpec.parentTable, fkSpec);
                    _this.cascadeChildren.set(fkSpec.parentTable, table);
                }
                _this.colParent.set(table.getName() + '.' + fkSpec.childColumn, fkSpec.parentTable);
                var ref = "".concat(fkSpec.parentTable, ".").concat(fkSpec.parentColumn);
                _this.colChild.set(ref, table.getName());
            }, _this);
        }, this);
    }
    Info.from = function (dbSchema) {
        return dbSchema.info();
    };
    Info.prototype.getReferencingForeignKeys = function (tableName, constraintAction) {
        if (constraintAction !== undefined && constraintAction !== null) {
            return constraintAction === ConstraintAction.CASCADE
                ? this.cascadeReferringFk.get(tableName)
                : this.restrictReferringFk.get(tableName);
        }
        else {
            var cascadeConstraints = this.cascadeReferringFk.get(tableName);
            var restrictConstraints = this.restrictReferringFk.get(tableName);
            if (cascadeConstraints === null && restrictConstraints === null) {
                return null;
            }
            else {
                return (cascadeConstraints || []).concat(restrictConstraints || []);
            }
        }
    };
    Info.prototype.getParentTables = function (tableName) {
        return this.expandScope(tableName, this.parents);
    };
    Info.prototype.getParentTablesByColumns = function (colNames) {
        var _this = this;
        var tableNames = new Set();
        colNames.forEach(function (col) {
            var table = _this.colParent.get(col);
            if (table) {
                tableNames.add(table);
            }
        }, this);
        var tables = Array.from(tableNames.values());
        return tables.map(function (tableName) { return _this.dbSchema.table(tableName); });
    };
    Info.prototype.getChildTables = function (tableName, constraintAction) {
        if (!(constraintAction !== undefined && constraintAction !== null)) {
            return this.expandScope(tableName, this.children);
        }
        else if (constraintAction === ConstraintAction.RESTRICT) {
            return this.expandScope(tableName, this.restrictChildren);
        }
        else {
            return this.expandScope(tableName, this.cascadeChildren);
        }
    };
    Info.prototype.getChildTablesByColumns = function (colNames) {
        var _this = this;
        var tableNames = new Set();
        colNames.forEach(function (col) {
            var children = _this.colChild.get(col);
            if (children) {
                children.forEach(function (child) { return tableNames.add(child); });
            }
        }, this);
        var tables = Array.from(tableNames.values());
        return tables.map(function (tableName) { return _this.dbSchema.table(tableName); });
    };
    Info.prototype.expandScope = function (tableName, map) {
        var values = map.get(tableName);
        return values === null ? [] : values;
    };
    return Info;
}());
var DeleteContext = (function (_super) {
    __extends(DeleteContext, _super);
    function DeleteContext(dbSchema) {
        return _super.call(this, dbSchema) || this;
    }
    DeleteContext.prototype.getScope = function () {
        var scope = new Set();
        scope.add(this.from);
        this.expandTableScope(this.from.getName(), scope);
        return scope;
    };
    DeleteContext.prototype.clone = function () {
        var context = new DeleteContext(this.schema);
        context.cloneBase(this);
        context.from = this.from;
        return context;
    };
    DeleteContext.prototype.bind = function (values) {
        _super.prototype.bind.call(this, values);
        this.bindValuesInSearchCondition(values);
        return this;
    };
    DeleteContext.prototype.expandTableScope = function (tableName, scopeSoFar) {
        var _this = this;
        var cascadeChildTables = Info.from(this.schema).getChildTables(tableName, ConstraintAction.CASCADE);
        var childTables = Info.from(this.schema).getChildTables(tableName);
        childTables.forEach(scopeSoFar.add.bind(scopeSoFar));
        cascadeChildTables.forEach(function (childTable) {
            _this.expandTableScope(childTable.getName(), scopeSoFar);
        }, this);
    };
    return DeleteContext;
}(Context));
var InsertContext = (function (_super) {
    __extends(InsertContext, _super);
    function InsertContext(dbSchema) {
        return _super.call(this, dbSchema) || this;
    }
    InsertContext.prototype.getScope = function () {
        var scope = new Set();
        scope.add(this.into);
        var info = Info.from(this.schema);
        info.getParentTables(this.into.getName()).forEach(scope.add.bind(scope));
        if (this.allowReplace) {
            info.getChildTables(this.into.getName()).forEach(scope.add.bind(scope));
        }
        return scope;
    };
    InsertContext.prototype.clone = function () {
        var context = new InsertContext(this.schema);
        context.cloneBase(this);
        context.into = this.into;
        if (this.values) {
            context.values =
                this.values instanceof Binder ? this.values : this.values.slice();
        }
        context.allowReplace = this.allowReplace;
        context.binder = this.binder;
        return context;
    };
    InsertContext.prototype.bind = function (values) {
        _super.prototype.bind.call(this, values);
        if (this.binder) {
            if (this.binder instanceof Binder) {
                this.values = values[this.binder.index];
            }
            else {
                this.values = this.binder.map(function (val) {
                    return (val instanceof Binder ? values[val.index] : val);
                });
            }
        }
        return this;
    };
    return InsertContext;
}(Context));
var UpdateContext = (function (_super) {
    __extends(UpdateContext, _super);
    function UpdateContext(dbSchema) {
        return _super.call(this, dbSchema) || this;
    }
    UpdateContext.prototype.getScope = function () {
        var scope = new Set();
        scope.add(this.table);
        var columns = this.set.map(function (col) { return col.column.getNormalizedName(); });
        var info = Info.from(this.schema);
        info.getParentTablesByColumns(columns).forEach(scope.add.bind(scope));
        info.getChildTablesByColumns(columns).forEach(scope.add.bind(scope));
        return scope;
    };
    UpdateContext.prototype.clone = function () {
        var context = new UpdateContext(this.schema);
        context.cloneBase(this);
        context.table = this.table;
        context.set = this.set ? this.cloneSet(this.set) : this.set;
        return context;
    };
    UpdateContext.prototype.bind = function (values) {
        _super.prototype.bind.call(this, values);
        this.set.forEach(function (set) {
            if (set.binding !== undefined && set.binding !== -1) {
                set.value = values[set.binding];
            }
        });
        this.bindValuesInSearchCondition(values);
        return this;
    };
    UpdateContext.prototype.cloneSet = function (set) {
        return set.map(function (src) {
            var clone = __assign({}, src);
            return clone;
        });
    };
    return UpdateContext;
}(Context));
var SqlHelper = (function () {
    function SqlHelper() {
    }
    SqlHelper.toSql = function (builder, stripValueInfo) {
        if (stripValueInfo === void 0) { stripValueInfo = false; }
        var query = builder.getQuery();
        if (query instanceof InsertContext) {
            return SqlHelper.insertToSql(query, stripValueInfo);
        }
        if (query instanceof DeleteContext) {
            return SqlHelper.deleteToSql(query, stripValueInfo);
        }
        if (query instanceof UpdateContext) {
            return SqlHelper.updateToSql(query, stripValueInfo);
        }
        if (query instanceof SelectContext) {
            return SqlHelper.selectToSql(query, stripValueInfo);
        }
        throw new Exception(ErrorCode.NOT_IMPL_IN_TOSQL, typeof query);
    };
    SqlHelper.escapeSqlValue = function (type, val) {
        var value = val;
        if (value === undefined || value === null) {
            return 'NULL';
        }
        switch (type) {
            case Type.BOOLEAN:
                return value ? 1 : 0;
            case Type.INTEGER:
            case Type.NUMBER:
                return value;
            case Type.ARRAY_BUFFER:
                return "'".concat(Row.binToHex(value), "'");
            default:
                return "'".concat(value.toString(), "'");
        }
    };
    SqlHelper.insertToSql = function (query, stripValueInfo) {
        var prefix = query.allowReplace ? 'INSERT OR REPLACE' : 'INSERT';
        var columns = query.into.getColumns();
        prefix += ' INTO ' + query.into.getName() + '(';
        prefix += columns.map(function (col) { return col.getName(); }).join(', ');
        prefix += ') VALUES (';
        var sqls = query.values.map(function (row) {
            var values = columns.map(function (col) {
                var rawVal = row.payload()[col.getName()];
                return stripValueInfo
                    ? rawVal !== undefined && rawVal !== null
                        ? '#'
                        : 'NULL'
                    : SqlHelper.escapeSqlValue(col.getType(), rawVal);
            });
            return prefix + values.join(', ') + ');';
        });
        return sqls.join('\n');
    };
    SqlHelper.evaluatorToSql = function (op) {
        switch (op) {
            case EvalType.BETWEEN:
                return 'BETWEEN';
            case EvalType.EQ:
                return '=';
            case EvalType.GTE:
                return '>=';
            case EvalType.GT:
                return '>';
            case EvalType.IN:
                return 'IN';
            case EvalType.LTE:
                return '<=';
            case EvalType.LT:
                return '<';
            case EvalType.MATCH:
                return 'LIKE';
            case EvalType.NEQ:
                return '<>';
            default:
                return 'UNKNOWN';
        }
    };
    SqlHelper.valueToSql = function (value, op, type, stripValueInfo) {
        if (value instanceof Binder) {
            return '?' + value.getIndex().toString();
        }
        if (stripValueInfo) {
            return value !== undefined && value !== null ? '#' : 'NULL';
        }
        else if (op === EvalType.MATCH) {
            return "'".concat(value.toString(), "'");
        }
        else if (op === EvalType.IN) {
            var array = value;
            var vals = array.map(function (e) { return SqlHelper.escapeSqlValue(type, e); });
            return "(".concat(vals.join(', '), ")");
        }
        else if (op === EvalType.BETWEEN) {
            return (SqlHelper.escapeSqlValue(type, value[0]) +
                ' AND ' +
                SqlHelper.escapeSqlValue(type, value[1]));
        }
        return SqlHelper.escapeSqlValue(type, value).toString();
    };
    SqlHelper.valuePredicateToSql = function (pred, stripValueInfo) {
        var column = pred.column.getNormalizedName();
        var op = SqlHelper.evaluatorToSql(pred.evaluatorType);
        var value = SqlHelper.valueToSql(pred.peek(), pred.evaluatorType, pred.column.getType(), stripValueInfo);
        if (op === '=' && value === 'NULL') {
            return [column, 'IS NULL'].join(' ');
        }
        else if (op === '<>' && value === 'NULL') {
            return [column, 'IS NOT NULL'].join(' ');
        }
        else {
            return [column, op, value].join(' ');
        }
    };
    SqlHelper.combinedPredicateToSql = function (pred, stripValueInfo) {
        var children = pred.getChildren().map(function (childNode) {
            return ('(' +
                SqlHelper.parseSearchCondition(childNode, stripValueInfo) +
                ')');
        });
        var joinToken = pred.operator === Operator.AND ? ' AND ' : ' OR ';
        return children.join(joinToken);
    };
    SqlHelper.joinPredicateToSql = function (pred) {
        return [
            pred.leftColumn.getNormalizedName(),
            SqlHelper.evaluatorToSql(pred.evaluatorType),
            pred.rightColumn.getNormalizedName(),
        ].join(' ');
    };
    SqlHelper.parseSearchCondition = function (pred, stripValueInfo) {
        if (pred instanceof ValuePredicate) {
            return SqlHelper.valuePredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof CombinedPredicate) {
            return SqlHelper.combinedPredicateToSql(pred, stripValueInfo);
        }
        else if (pred instanceof JoinPredicate) {
            return SqlHelper.joinPredicateToSql(pred);
        }
        throw new Exception(357, typeof pred);
    };
    SqlHelper.predicateToSql = function (pred, stripValueInfo) {
        var whereClause = SqlHelper.parseSearchCondition(pred, stripValueInfo);
        if (whereClause) {
            return ' WHERE ' + whereClause;
        }
        return '';
    };
    SqlHelper.deleteToSql = function (query, stripValueInfo) {
        var sql = 'DELETE FROM ' + query.from.getName();
        if (query.where) {
            sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
        }
        sql += ';';
        return sql;
    };
    SqlHelper.updateToSql = function (query, stripValueInfo) {
        var sql = 'UPDATE ' + query.table.getName() + ' SET ';
        sql += query.set
            .map(function (set) {
            var c = set.column;
            var setter = c.getNormalizedName() + ' = ';
            if (set.binding !== -1) {
                return setter + '?' + set.binding.toString();
            }
            return (setter + SqlHelper.escapeSqlValue(c.getType(), set.value).toString());
        })
            .join(', ');
        if (query.where) {
            sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
        }
        sql += ';';
        return sql;
    };
    SqlHelper.selectToSql = function (query, stripValueInfo) {
        var colList = '*';
        if (query.columns.length) {
            colList = query.columns
                .map(function (c) {
                var col = c;
                if (col.getAlias()) {
                    return col.getNormalizedName() + ' AS ' + col.getAlias();
                }
                else {
                    return col.getNormalizedName();
                }
            })
                .join(', ');
        }
        var sql = 'SELECT ' + colList + ' FROM ';
        if (query.outerJoinPredicates && query.outerJoinPredicates.size !== 0) {
            sql += SqlHelper.getFromListForOuterJoin(query, stripValueInfo);
        }
        else {
            sql += SqlHelper.getFromListForInnerJoin(query, stripValueInfo);
            if (query.where) {
                sql += SqlHelper.predicateToSql(query.where, stripValueInfo);
            }
        }
        if (query.orderBy) {
            var orderBy = query.orderBy
                .map(function (order) {
                return (order.column.getNormalizedName() +
                    (order.order === Order.DESC ? ' DESC' : ' ASC'));
            })
                .join(', ');
            sql += ' ORDER BY ' + orderBy;
        }
        if (query.groupBy) {
            var groupBy = query.groupBy
                .map(function (col) { return col.getNormalizedName(); })
                .join(', ');
            sql += ' GROUP BY ' + groupBy;
        }
        if (query.limit) {
            sql += ' LIMIT ' + query.limit.toString();
        }
        if (query.skip) {
            sql += ' SKIP ' + query.skip.toString();
        }
        sql += ';';
        return sql;
    };
    SqlHelper.getTableNameToSql = function (t) {
        var table = t;
        return table.getEffectiveName() !== table.getName()
            ? table.getName() + ' AS ' + table.getEffectiveName()
            : table.getName();
    };
    SqlHelper.getFromListForOuterJoin = function (query, stripValueInfo) {
        var retrievedNodes = TreeHelper.find(query.where, function (n) { return n instanceof JoinPredicate; });
        var predicateString = retrievedNodes.map(function (n) {
            return SqlHelper.joinPredicateToSql(n);
        });
        var fromList = SqlHelper.getTableNameToSql(query.from[0]);
        for (var i = 1; i < query.from.length; i++) {
            var fromName = SqlHelper.getTableNameToSql(query.from[i]);
            if (query.outerJoinPredicates.has(retrievedNodes[predicateString.length - i].getId())) {
                fromList += ' LEFT OUTER JOIN ' + fromName;
            }
            else {
                fromList += ' INNER JOIN ' + fromName;
            }
            fromList += ' ON (' + predicateString[predicateString.length - i] + ')';
        }
        var node = query.where;
        var leftChild = node.getChildCount() > 0 ? node.getChildAt(0) : node;
        if (!(leftChild instanceof JoinPredicate)) {
            fromList +=
                ' WHERE ' +
                    SqlHelper.parseSearchCondition(leftChild, stripValueInfo);
        }
        return fromList;
    };
    SqlHelper.getFromListForInnerJoin = function (query, stripValueInfo) {
        return query.from.map(SqlHelper.getTableNameToSql).join(', ');
    };
    return SqlHelper;
}());
var BaseBuilder = (function () {
    function BaseBuilder(global, context) {
        this.global = global;
        this.queryEngine = global.getService(Service.QUERY_ENGINE);
        this.runner = global.getService(Service.RUNNER);
        this.query = context;
    }
    BaseBuilder.prototype.exec = function () {
        var _this = this;
        try {
            this.assertExecPreconditions();
        }
        catch (e) {
            return Promise.reject(e);
        }
        return new Promise(function (resolve, reject) {
            var queryTask = new UserQueryTask(_this.global, [_this.getTaskItem()]);
            _this.runner
                .scheduleTask(queryTask)
                .then(function (results) { return resolve(results[0].getPayloads()); }, reject);
        });
    };
    BaseBuilder.prototype.explain = function () {
        var _this = this;
        var stringFn = function (node) {
            return "".concat(node.toContextString(_this.query), "\n");
        };
        return TreeHelper.toString(this.getPlan().getRoot(), stringFn);
    };
    BaseBuilder.prototype.bind = function (values) {
        this.query.bind(values);
        return this;
    };
    BaseBuilder.prototype.toSql = function (stripValueInfo) {
        if (stripValueInfo === void 0) { stripValueInfo = false; }
        return SqlHelper.toSql(this, stripValueInfo);
    };
    BaseBuilder.prototype.assertExecPreconditions = function () {
    };
    BaseBuilder.prototype.getQuery = function () {
        return this.query.clone();
    };
    BaseBuilder.prototype.getObservableQuery = function () {
        return this.query;
    };
    BaseBuilder.prototype.getTaskItem = function () {
        return {
            context: this.getQuery(),
            plan: this.getPlan(),
        };
    };
    BaseBuilder.prototype.getObservableTaskItem = function () {
        return {
            context: this.getObservableQuery(),
            plan: this.getPlan(),
        };
    };
    BaseBuilder.prototype.getPlan = function () {
        if (this.plan === undefined || this.plan === null) {
            this.plan = this.queryEngine.getPlan(this.query);
        }
        return this.plan;
    };
    return BaseBuilder;
}());
var SelectBuilder = (function (_super) {
    __extends(SelectBuilder, _super);
    function SelectBuilder(global, columns) {
        var _this = _super.call(this, global, new SelectContext(global.getService(Service.SCHEMA))) || this;
        _this.fromAlreadyCalled = false;
        _this.whereAlreadyCalled = false;
        _this.query.columns = columns;
        _this.checkDistinctColumn();
        _this.checkAggregations();
        return _this;
    }
    SelectBuilder.prototype.assertExecPreconditions = function () {
        _super.prototype.assertExecPreconditions.call(this);
        var context = this.query;
        if (context.from === undefined || context.from === null) {
            throw new Exception(ErrorCode.INVALID_SELECT);
        }
        if ((context.limitBinder && context.limit === undefined) ||
            (context.skipBinder && context.skip === undefined)) {
            throw new Exception(ErrorCode.UNBOUND_LIMIT_SKIP);
        }
        this.checkProjectionList();
    };
    SelectBuilder.prototype.from = function () {
        var _a;
        var tables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tables[_i] = arguments[_i];
        }
        if (this.fromAlreadyCalled) {
            throw new Exception(ErrorCode.DUPLICATE_FROM);
        }
        this.fromAlreadyCalled = true;
        if (this.query.from === undefined || this.query.from === null) {
            this.query.from = [];
        }
        (_a = this.query.from).push.apply(_a, tables);
        return this;
    };
    SelectBuilder.prototype.where = function (predicate) {
        this.checkFrom(ErrorCode.FROM_AFTER_WHERE);
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
        this.whereAlreadyCalled = true;
        this.augmentWhereClause(predicate);
        return this;
    };
    SelectBuilder.prototype.innerJoin = function (table, predicate) {
        this.checkFrom(ErrorCode.MISSING_FROM_BEFORE_JOIN);
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.INVALID_WHERE);
        }
        this.query.from.push(table);
        this.augmentWhereClause(predicate);
        return this;
    };
    SelectBuilder.prototype.leftOuterJoin = function (table, predicate) {
        this.checkFrom(ErrorCode.MISSING_FROM_BEFORE_JOIN);
        if (!(predicate instanceof JoinPredicate)) {
            throw new Exception(ErrorCode.INVALID_OUTER_JOIN);
        }
        if (this.whereAlreadyCalled) {
            throw new Exception(ErrorCode.INVALID_WHERE);
        }
        this.query.from.push(table);
        if (this.query.outerJoinPredicates === null ||
            this.query.outerJoinPredicates === undefined) {
            this.query.outerJoinPredicates = new Set();
        }
        var normalizedPredicate = predicate;
        if (table.getEffectiveName() !==
            predicate.rightColumn.getTable().getEffectiveName()) {
            normalizedPredicate = predicate.reverse();
        }
        this.query.outerJoinPredicates.add(normalizedPredicate.getId());
        this.augmentWhereClause(normalizedPredicate);
        return this;
    };
    SelectBuilder.prototype.limit = function (numberOfRows) {
        if (this.query.limit !== undefined || this.query.limitBinder) {
            throw new Exception(ErrorCode.DUPLICATE_LIMIT);
        }
        if (numberOfRows instanceof Binder) {
            this.query.limitBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.limit = numberOfRows;
        }
        return this;
    };
    SelectBuilder.prototype.skip = function (numberOfRows) {
        if (this.query.skip !== undefined || this.query.skipBinder) {
            throw new Exception(ErrorCode.DUPLICATE_SKIP);
        }
        if (numberOfRows instanceof Binder) {
            this.query.skipBinder = numberOfRows;
        }
        else {
            if (numberOfRows < 0) {
                throw new Exception(ErrorCode.NEGATIVE_LIMIT_SKIP);
            }
            this.query.skip = numberOfRows;
        }
        return this;
    };
    SelectBuilder.prototype.orderBy = function (column, order) {
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.orderBy === undefined) {
            this.query.orderBy = [];
        }
        this.query.orderBy.push({
            column: column,
            order: order !== undefined && order !== null ? order : Order.ASC,
        });
        return this;
    };
    SelectBuilder.prototype.groupBy = function () {
        var _a;
        var columns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columns[_i] = arguments[_i];
        }
        this.checkFrom(ErrorCode.FROM_AFTER_ORDER_GROUPBY);
        if (this.query.groupBy) {
            throw new Exception(ErrorCode.DUPLICATE_GROUPBY);
        }
        if (this.query.groupBy === undefined) {
            this.query.groupBy = [];
        }
        (_a = this.query.groupBy).push.apply(_a, columns);
        return this;
    };
    SelectBuilder.prototype.clone = function () {
        var builder = new SelectBuilder(this.global, this.query.columns);
        builder.query = this.query.clone();
        builder.query.clonedFrom = null;
        return builder;
    };
    SelectBuilder.prototype.checkDistinctColumn = function () {
        var distinctColumns = this.query.columns.filter(function (column) {
            return column instanceof AggregatedColumn &&
                column.aggregatorType === FnType.DISTINCT;
        });
        var isValidCombination = distinctColumns.length === 0 ||
            (distinctColumns.length === 1 && this.query.columns.length === 1);
        if (!isValidCombination) {
            throw new Exception(ErrorCode.INVALID_DISTINCT);
        }
    };
    SelectBuilder.prototype.checkProjectionList = function () {
        this.query.groupBy
            ? this.checkGroupByColumns()
            : this.checkProjectionListNotMixed();
    };
    SelectBuilder.prototype.checkGroupByColumns = function () {
        var isInvalid = this.query.groupBy.some(function (column) {
            var type = column.getType();
            return type === Type.OBJECT || type === Type.ARRAY_BUFFER;
        });
        if (isInvalid) {
            throw new Exception(ErrorCode.INVALID_GROUPBY);
        }
    };
    SelectBuilder.prototype.checkProjectionListNotMixed = function () {
        var aggregatedColumnsExist = this.query.columns.some(function (column) { return column instanceof AggregatedColumn; });
        var nonAggregatedColumnsExist = this.query.columns.some(function (column) { return !(column instanceof AggregatedColumn); }) || this.query.columns.length === 0;
        if (aggregatedColumnsExist && nonAggregatedColumnsExist) {
            throw new Exception(ErrorCode.INVALID_PROJECTION);
        }
    };
    SelectBuilder.prototype.checkAggregations = function () {
        var _this = this;
        this.query.columns.forEach(function (column) {
            var isValidAggregation = !(column instanceof AggregatedColumn) ||
                _this.isAggregationValid(column.aggregatorType, column.getType());
            if (!isValidAggregation) {
                throw new Exception(ErrorCode.INVALID_AGGREGATION, column.getNormalizedName());
            }
        }, this);
    };
    SelectBuilder.prototype.checkFrom = function (code) {
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(code);
        }
    };
    SelectBuilder.prototype.augmentWhereClause = function (predicate) {
        if (this.query.where) {
            var newPredicate = op.and(predicate, this.query.where);
            this.query.where = newPredicate;
        }
        else {
            this.query.where = predicate;
        }
    };
    SelectBuilder.prototype.isAggregationValid = function (aggregatorType, columnType) {
        switch (aggregatorType) {
            case FnType.COUNT:
            case FnType.DISTINCT:
                return true;
            case FnType.AVG:
            case FnType.GEOMEAN:
            case FnType.STDDEV:
            case FnType.SUM:
                return columnType === Type.NUMBER || columnType === Type.INTEGER;
            case FnType.MAX:
            case FnType.MIN:
                return (columnType === Type.NUMBER ||
                    columnType === Type.INTEGER ||
                    columnType === Type.STRING ||
                    columnType === Type.DATE_TIME);
            default:
        }
        return false;
    };
    return SelectBuilder;
}(BaseBuilder));
var MathHelper = (function () {
    function MathHelper() {
    }
    MathHelper.longestCommonSubsequence = function (array1, array2, comparator, collector) {
        var defaultComparator = function (a, b) { return a === b; };
        var defaultCollector = function (i1, i2) { return array1[i1]; };
        var compare = comparator || defaultComparator;
        var collect = collector || defaultCollector;
        var length1 = array1.length;
        var length2 = array2.length;
        var arr = [];
        var i;
        var j;
        for (i = 0; i < length1 + 1; ++i) {
            arr[i] = [];
            arr[i][0] = 0;
        }
        for (j = 0; j < length2 + 1; ++j) {
            arr[0][j] = 0;
        }
        for (i = 1; i < length1 + 1; ++i) {
            for (j = 1; j < length2 + 1; ++j) {
                arr[i][j] = compare(array1[i - 1], array2[j - 1])
                    ? arr[i - 1][j - 1] + 1
                    : Math.max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
        var result = [];
        i = length1;
        j = length2;
        while (i > 0 && j > 0) {
            if (compare(array1[i - 1], array2[j - 1])) {
                result.unshift(collect(i - 1, j - 1));
                i--;
                j--;
            }
            else {
                if (arr[i - 1][j] > arr[i][j - 1]) {
                    i--;
                }
                else {
                    j--;
                }
            }
        }
        return result;
    };
    MathHelper.sum = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (sum, value) { return sum + value; }, 0);
    };
    MathHelper.average = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return MathHelper.sum.apply(null, args) / args.length;
    };
    MathHelper.standardDeviation = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!args || args.length < 2) {
            return 0;
        }
        var mean = MathHelper.average.apply(null, args);
        var sampleVariance = MathHelper.sum.apply(null, args.map(function (val) { return Math.pow(val - mean, 2); })) /
            (args.length - 1);
        return Math.sqrt(sampleVariance);
    };
    return MathHelper;
}());
var DiffCalculator = (function () {
    function DiffCalculator(query, observableResults) {
        this.query = query;
        this.observableResults = observableResults;
        this.evalRegistry = EvalRegistry.get();
        this.columns = this.detectColumns();
    }
    DiffCalculator.prototype.applyDiff = function (oldResults, newResults) {
        var oldEntries = oldResults === null ? [] : oldResults.entries;
        var longestCommonSubsequenceLeft = MathHelper.longestCommonSubsequence(oldEntries, newResults.entries, this.comparator.bind(this), function (indexLeft, indexRight) { return oldEntries[indexLeft]; });
        var changeRecords = [];
        var commonIndex = 0;
        for (var i = 0; i < oldEntries.length; i++) {
            var entry = oldEntries[i];
            if (longestCommonSubsequenceLeft[commonIndex] === entry) {
                commonIndex++;
                continue;
            }
            else {
                var removed = this.observableResults.splice(commonIndex, 1);
                var changeRecord = this.createChangeRecord(i, removed, 0, this.observableResults);
                changeRecords.push(changeRecord);
            }
        }
        var longestCommonSubsequenceRight = MathHelper.longestCommonSubsequence(oldEntries, newResults.entries, this.comparator.bind(this), function (indexLeft, indexRight) { return newResults.entries[indexRight]; });
        commonIndex = 0;
        for (var i = 0; i < newResults.entries.length; i++) {
            var entry = newResults.entries[i];
            if (longestCommonSubsequenceRight[commonIndex] === entry) {
                commonIndex++;
                continue;
            }
            else {
                this.observableResults.splice(i, 0, entry.row.payload());
                var changeRecord = this.createChangeRecord(i, [], 1, this.observableResults);
                changeRecords.push(changeRecord);
            }
        }
        return changeRecords;
    };
    DiffCalculator.prototype.detectColumns = function () {
        if (this.query.columns.length > 0) {
            return this.query.columns;
        }
        else {
            var columns_1 = [];
            this.query.from.forEach(function (t) {
                var table = t;
                table.getColumns().forEach(function (column) { return columns_1.push(column); });
            });
            return columns_1;
        }
    };
    DiffCalculator.prototype.comparator = function (left, right) {
        var _this = this;
        return this.columns.every(function (column) {
            if (column.getType() === Type.OBJECT ||
                column.getType() === Type.ARRAY_BUFFER) {
                return left.getField(column) === right.getField(column);
            }
            var evalFn = _this.evalRegistry.getEvaluator(column.getType(), EvalType.EQ);
            return evalFn(left.getField(column), right.getField(column));
        }, this);
    };
    DiffCalculator.prototype.createChangeRecord = function (index, removed, addedCount, object) {
        return {
            addedCount: addedCount,
            index: index,
            object: object,
            removed: removed,
            type: 'splice',
        };
    };
    return DiffCalculator;
}());
var ObserverRegistryEntry = (function () {
    function ObserverRegistryEntry(builder) {
        this.builder = builder;
        this.builder = builder;
        this.observers = new Set();
        this.observable = [];
        this.lastResults = null;
        var context = builder.getObservableQuery();
        this.diffCalculator = new DiffCalculator(context, this.observable);
    }
    ObserverRegistryEntry.prototype.addObserver = function (callback) {
        if (this.observers.has(callback)) {
            assert(false, 'Attempted to register observer twice.');
            return;
        }
        this.observers.add(callback);
    };
    ObserverRegistryEntry.prototype.removeObserver = function (callback) {
        return this.observers.delete(callback);
    };
    ObserverRegistryEntry.prototype.getTaskItem = function () {
        return this.builder.getObservableTaskItem();
    };
    ObserverRegistryEntry.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObserverRegistryEntry.prototype.updateResults = function (newResults) {
        var changeRecords = this.diffCalculator.applyDiff(this.lastResults, newResults);
        this.lastResults = newResults;
        if (changeRecords.length > 0) {
            this.observers.forEach(function (observerFn) { return observerFn(changeRecords); });
        }
    };
    return ObserverRegistryEntry;
}());
var ObserverRegistry = (function () {
    function ObserverRegistry() {
        this.entries = new Map();
    }
    ObserverRegistry.prototype.addObserver = function (query, callback) {
        var builder = query;
        var queryId = this.getQueryId(builder.getObservableQuery());
        var entry = this.entries.get(queryId) || null;
        if (entry === null) {
            entry = new ObserverRegistryEntry(builder);
            this.entries.set(queryId, entry);
        }
        entry.addObserver(callback);
    };
    ObserverRegistry.prototype.removeObserver = function (query, callback) {
        var builder = query;
        var queryId = this.getQueryId(builder.getObservableQuery());
        var entry = this.entries.get(queryId);
        assert(entry !== undefined && entry !== null, 'Attempted to unobserve a query that was not observed.');
        var didRemove = entry.removeObserver(callback);
        assert(didRemove, 'removeObserver: Inconsistent state detected.');
        if (!entry.hasObservers()) {
            this.entries.delete(queryId);
        }
    };
    ObserverRegistry.prototype.getTaskItemsForTables = function (tables) {
        var tableSet = new Set();
        tables.forEach(function (table) { return tableSet.add(table.getName()); });
        var items = [];
        this.entries.forEach(function (entry) {
            var item = entry.getTaskItem();
            var refersToTables = item.context.from.some(function (table) {
                return tableSet.has(table.getName());
            });
            if (refersToTables) {
                items.push(item);
            }
        });
        return items;
    };
    ObserverRegistry.prototype.updateResultsForQuery = function (query, results) {
        var queryId = this.getQueryId(query.clonedFrom !== undefined && query.clonedFrom !== null
            ? query.clonedFrom
            : query);
        var entry = this.entries.get(queryId) || null;
        if (entry !== null) {
            entry.updateResults(results);
            return true;
        }
        return false;
    };
    ObserverRegistry.prototype.getQueryId = function (query) {
        return query.getUniqueId();
    };
    return ObserverRegistry;
}());
var Service = (function () {
    function Service() {
    }
    Service.BACK_STORE = new ServiceId('backstore');
    Service.CACHE = new ServiceId('cache');
    Service.INDEX_STORE = new ServiceId('indexstore');
    Service.QUERY_ENGINE = new ServiceId('engine');
    Service.RUNNER = new ServiceId('runner');
    Service.OBSERVER_REGISTRY = new ServiceId('observerregistry');
    Service.SCHEMA = new ServiceId('schema');
    return Service;
}());
var ConstraintChecker = (function () {
    function ConstraintChecker(global) {
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.schema = global.getService(Service.SCHEMA);
        this.cache = global.getService(Service.CACHE);
        this.foreignKeysParentIndices = new Map();
    }
    ConstraintChecker.didColumnValueChange = function (rowBefore, rowAfter, indexName) {
        var deletionOrAddition = rowBefore === null ? rowAfter !== null : rowAfter === null;
        return (deletionOrAddition ||
            rowBefore.keyOfIndex(indexName) !== rowAfter.keyOfIndex(indexName));
    };
    ConstraintChecker.prototype.findExistingRowIdInPkIndex = function (table, row) {
        var pkIndexSchema = table.getConstraint().getPrimaryKey();
        if (pkIndexSchema === null) {
            return null;
        }
        return this.findExistingRowIdInIndex(pkIndexSchema, row);
    };
    ConstraintChecker.prototype.checkNotNullable = function (table, rows) {
        var _this = this;
        var notNullable = table.getConstraint().getNotNullable();
        rows.forEach(function (row) {
            notNullable.forEach(function (column) {
                var target = row.payload()[column.getName()];
                if (!(target !== null && target !== undefined)) {
                    throw new Exception(ErrorCode.NOT_NULLABLE, column.getNormalizedName());
                }
            }, _this);
        }, this);
    };
    ConstraintChecker.prototype.detectCascadeUpdates = function (table, modifications, foreignKeySpecs) {
        var cascadedUpdates = new MapSet();
        this.loopThroughReferringRows(foreignKeySpecs, modifications, function (foreignKeySpec, childIndex, parentKey, modification) {
            var childRowIds = childIndex.get(parentKey);
            childRowIds.forEach(function (rowId) {
                cascadedUpdates.set(rowId, {
                    fkSpec: foreignKeySpec,
                    originalUpdatedRow: modification[1],
                });
            });
        });
        return cascadedUpdates;
    };
    ConstraintChecker.prototype.checkForeignKeysForInsert = function (table, rows, constraintTiming) {
        if (rows.length === 0) {
            return;
        }
        var modifications = rows.map(function (row) {
            return [null, row];
        });
        this.checkReferredKeys(table, modifications, constraintTiming);
    };
    ConstraintChecker.prototype.checkForeignKeysForUpdate = function (table, modifications, constraintTiming) {
        if (modifications.length === 0) {
            return;
        }
        this.checkReferredKeys(table, modifications, constraintTiming);
        this.checkReferringKeys(table, modifications, constraintTiming, ConstraintAction.RESTRICT);
    };
    ConstraintChecker.prototype.checkForeignKeysForDelete = function (table, rows, constraintTiming) {
        if (rows.length === 0) {
            return;
        }
        var modifications = rows.map(function (row) {
            return [row, null];
        });
        this.checkReferringKeys(table, modifications, constraintTiming);
    };
    ConstraintChecker.prototype.detectCascadeDeletion = function (table, rows) {
        var _this = this;
        var result = {
            rowIdsPerTable: new MapSet(),
            tableOrder: [],
        };
        var lastRowIdsToDelete = new MapSet();
        lastRowIdsToDelete.setMany(table.getName(), rows.map(function (row) { return row.id(); }));
        var _loop_1 = function () {
            var newRowIdsToDelete = new MapSet();
            lastRowIdsToDelete.keys().forEach(function (tableName) {
                var _a;
                var tbl = _this.schema.table(tableName);
                var rowIds = lastRowIdsToDelete.get(tableName);
                var modifications = rowIds.map(function (rowId) {
                    var row = _this.cache.get(rowId);
                    return [row, null];
                }, _this);
                var referringRowIds = _this.findReferringRowIds(tbl, modifications);
                if (referringRowIds !== null) {
                    (_a = result.tableOrder).unshift.apply(_a, referringRowIds.keys());
                    newRowIdsToDelete.merge(referringRowIds);
                }
            }, this_1);
            lastRowIdsToDelete = newRowIdsToDelete;
            result.rowIdsPerTable.merge(lastRowIdsToDelete);
        };
        var this_1 = this;
        do {
            _loop_1();
        } while (lastRowIdsToDelete.size > 0);
        return result;
    };
    ConstraintChecker.prototype.findExistingRowIdInIndex = function (indexSchema, row) {
        var indexName = indexSchema.getNormalizedName();
        var indexKey = row.keyOfIndex(indexName);
        var index = this.indexStore.get(indexName);
        var rowIds = index.get(indexKey);
        return rowIds.length === 0 ? null : rowIds[0];
    };
    ConstraintChecker.prototype.checkReferredKeys = function (table, modifications, constraintTiming) {
        var _this = this;
        var foreignKeySpecs = table.getConstraint().getForeignKeys();
        foreignKeySpecs.forEach(function (foreignKeySpec) {
            if (foreignKeySpec.timing === constraintTiming) {
                _this.checkReferredKey(foreignKeySpec, modifications);
            }
        }, this);
    };
    ConstraintChecker.prototype.checkReferredKey = function (foreignKeySpec, modifications) {
        var parentIndex = this.getParentIndex(foreignKeySpec);
        modifications.forEach(function (modification) {
            var didColumnValueChange = ConstraintChecker.didColumnValueChange(modification[0], modification[1], foreignKeySpec.name);
            if (didColumnValueChange) {
                var rowAfter = modification[1];
                var parentKey = rowAfter.keyOfIndex(foreignKeySpec.name);
                if (parentKey !== null && !parentIndex.containsKey(parentKey)) {
                    throw new Exception(ErrorCode.FK_VIOLATION, foreignKeySpec.name);
                }
            }
        }, this);
    };
    ConstraintChecker.prototype.findParentIndex = function (foreignKeySpec) {
        var parentTable = this.schema.table(foreignKeySpec.parentTable);
        var parentColumn = parentTable[foreignKeySpec.parentColumn];
        var parentIndexSchema = parentColumn.getIndex();
        return this.indexStore.get(parentIndexSchema.getNormalizedName());
    };
    ConstraintChecker.prototype.getParentIndex = function (foreignKeySpec) {
        var parentIndex = this.foreignKeysParentIndices.get(foreignKeySpec.name);
        if (parentIndex === undefined) {
            parentIndex = this.findParentIndex(foreignKeySpec);
            this.foreignKeysParentIndices.set(foreignKeySpec.name, parentIndex);
        }
        return parentIndex;
    };
    ConstraintChecker.prototype.checkReferringKeys = function (table, modifications, constraintTiming, constraintAction) {
        var foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), constraintAction);
        if (foreignKeySpecs === null) {
            return;
        }
        foreignKeySpecs = foreignKeySpecs.filter(function (foreignKeySpec) {
            return foreignKeySpec.timing === constraintTiming;
        });
        if (foreignKeySpecs.length === 0) {
            return;
        }
        this.loopThroughReferringRows(foreignKeySpecs, modifications, function (foreignKeySpec, childIndex, parentKey) {
            if (childIndex.containsKey(parentKey)) {
                throw new Exception(ErrorCode.FK_VIOLATION, foreignKeySpec.name);
            }
        });
    };
    ConstraintChecker.prototype.findReferringRowIds = function (table, modifications) {
        var foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return null;
        }
        var referringRowIds = new MapSet();
        this.loopThroughReferringRows(foreignKeySpecs, modifications, function (foreignKeySpec, childIndex, parentKey) {
            var childRowIds = childIndex.get(parentKey);
            if (childRowIds.length > 0) {
                referringRowIds.setMany(foreignKeySpec.childTable, childRowIds);
            }
        });
        return referringRowIds;
    };
    ConstraintChecker.prototype.loopThroughReferringRows = function (foreignKeySpecs, modifications, callbackFn) {
        var _this = this;
        foreignKeySpecs.forEach(function (foreignKeySpec) {
            var childIndex = _this.indexStore.get(foreignKeySpec.name);
            var parentIndex = _this.getParentIndex(foreignKeySpec);
            modifications.forEach(function (modification) {
                var didColumnValueChange = ConstraintChecker.didColumnValueChange(modification[0], modification[1], parentIndex.getName());
                if (didColumnValueChange) {
                    var rowBefore = modification[0];
                    var parentKey = rowBefore.keyOfIndex(parentIndex.getName());
                    callbackFn(foreignKeySpec, childIndex, parentKey, modification);
                }
            }, _this);
        }, this);
    };
    return ConstraintChecker;
}());
var TableDiff = (function () {
    function TableDiff(name) {
        this.name = name;
        this.added = new Map();
        this.modified = new Map();
        this.deleted = new Map();
    }
    TableDiff.prototype.getName = function () {
        return this.name;
    };
    TableDiff.prototype.getAdded = function () {
        return this.added;
    };
    TableDiff.prototype.getModified = function () {
        return this.modified;
    };
    TableDiff.prototype.getDeleted = function () {
        return this.deleted;
    };
    TableDiff.prototype.add = function (row) {
        if (this.deleted.has(row.id())) {
            var modification = [
                this.deleted.get(row.id()),
                row,
            ];
            this.modified.set(row.id(), modification);
            this.deleted.delete(row.id());
        }
        else {
            this.added.set(row.id(), row);
        }
    };
    TableDiff.prototype.modify = function (modification) {
        var oldValue = modification[0];
        var newValue = modification[1];
        assert(oldValue.id() === newValue.id(), 'Row ID mismatch between old/new values.');
        var id = oldValue.id();
        if (this.added.has(id)) {
            this.added.set(id, newValue);
        }
        else if (this.modified.has(id)) {
            var overallModification = [
                this.modified.get(id)[0],
                newValue,
            ];
            this.modified.set(id, overallModification);
        }
        else {
            this.modified.set(id, modification);
        }
    };
    TableDiff.prototype.delete = function (row) {
        if (this.added.has(row.id())) {
            this.added.delete(row.id());
        }
        else if (this.modified.has(row.id())) {
            var originalRow = this.modified.get(row.id())[0];
            this.modified.delete(row.id());
            this.deleted.set(row.id(), originalRow);
        }
        else {
            this.deleted.set(row.id(), row);
        }
    };
    TableDiff.prototype.merge = function (other) {
        var _this = this;
        other.added.forEach(function (row) { return _this.add(row); });
        other.modified.forEach(function (modification) { return _this.modify(modification); });
        other.deleted.forEach(function (row) { return _this.delete(row); });
    };
    TableDiff.prototype.getAsModifications = function () {
        var modifications = [];
        this.added.forEach(function (row) {
            return modifications.push([null, row]);
        });
        this.modified.forEach(function (modification) { return modifications.push(modification); });
        this.deleted.forEach(function (row) {
            return modifications.push([row, null]);
        });
        return modifications;
    };
    TableDiff.prototype.toString = function () {
        return ("[".concat(Array.from(this.added.keys()).toString(), "], ") +
            "[".concat(Array.from(this.modified.keys()).toString(), "], ") +
            "[".concat(Array.from(this.deleted.keys()).toString(), "]"));
    };
    TableDiff.prototype.getReverse = function () {
        var reverseDiff = new TableDiff(this.name);
        this.added.forEach(function (row) { return reverseDiff.delete(row); });
        this.deleted.forEach(function (row) { return reverseDiff.add(row); });
        this.modified.forEach(function (modification) {
            reverseDiff.modify([modification[1], modification[0]]);
        });
        return reverseDiff;
    };
    TableDiff.prototype.isEmpty = function () {
        return (this.added.size === 0 &&
            this.deleted.size === 0 &&
            this.modified.size === 0);
    };
    return TableDiff;
}());
var InMemoryUpdater = (function () {
    function InMemoryUpdater(global) {
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.schema = global.getService(Service.SCHEMA);
    }
    InMemoryUpdater.prototype.update = function (tableDiffs) {
        var _this = this;
        tableDiffs.forEach(function (tableDiff) {
            _this.updateIndicesForDiff(tableDiff);
            _this.updateCacheForDiff(tableDiff);
        }, this);
    };
    InMemoryUpdater.prototype.updateTableIndicesForRow = function (table, modification) {
        var _this = this;
        var indices = this.indexStore.getTableIndices(table.getName());
        var updatedIndices = 0;
        indices.forEach(function (index) {
            try {
                _this.updateTableIndexForRow(index, modification);
                updatedIndices++;
            }
            catch (e) {
                indices.slice(0, updatedIndices).forEach(function (idx) {
                    _this.updateTableIndexForRow(idx, [modification[1], modification[0]]);
                }, _this);
                throw e;
            }
        }, this);
    };
    InMemoryUpdater.prototype.updateCacheForDiff = function (diff) {
        var _this = this;
        var tableName = diff.getName();
        diff
            .getDeleted()
            .forEach(function (row, rowId) { return _this.cache.remove(tableName, rowId); });
        diff.getAdded().forEach(function (row) { return _this.cache.set(tableName, row); });
        diff
            .getModified()
            .forEach(function (modification) {
            return _this.cache.set(tableName, modification[1]);
        });
    };
    InMemoryUpdater.prototype.updateIndicesForDiff = function (diff) {
        var _this = this;
        var table = this.schema.table(diff.getName());
        var modifications = diff.getAsModifications();
        modifications.forEach(function (modification) {
            _this.updateTableIndicesForRow(table, modification);
        }, this);
    };
    InMemoryUpdater.prototype.updateTableIndexForRow = function (index, modification) {
        var keyNow = modification[1] === null
            ? undefined
            : modification[1].keyOfIndex(index.getName());
        var keyThen = modification[0] === null
            ? undefined
            : modification[0].keyOfIndex(index.getName());
        if (keyThen === undefined && keyNow !== undefined) {
            index.add(keyNow, modification[1].id());
        }
        else if (keyThen !== undefined && keyNow !== undefined) {
            if (keyNow === null || keyThen === null) {
                if (keyNow === keyThen) {
                    return;
                }
            }
            else if (index.comparator().compare(keyThen, keyNow) === Favor.TIE) {
                return;
            }
            index.add(keyNow, modification[1].id());
            index.remove(keyThen, modification[0].id());
        }
        else if (keyThen !== undefined && keyNow === undefined) {
            index.remove(keyThen, modification[0].id());
        }
    };
    return InMemoryUpdater;
}());
var Journal = (function () {
    function Journal(global, txScope) {
        var _this = this;
        this.scope = new Map();
        txScope.forEach(function (tableSchema) {
            return _this.scope.set(tableSchema.getName(), tableSchema);
        });
        this.schema = global.getService(Service.SCHEMA);
        this.cache = global.getService(Service.CACHE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.constraintChecker = new ConstraintChecker(global);
        this.inMemoryUpdater = new InMemoryUpdater(global);
        this.terminated = false;
        this.pendingRollback = false;
        this.tableDiffs = new Map();
    }
    Journal.prototype.getDiff = function () {
        return this.tableDiffs;
    };
    Journal.prototype.getIndexDiff = function () {
        var _this = this;
        var tableSchemas = Array.from(this.tableDiffs.keys()).map(function (tableName) {
            return _this.scope.get(tableName);
        });
        var indices = [];
        tableSchemas.forEach(function (tblSchema) {
            var tableSchema = tblSchema;
            if (tableSchema.persistentIndex()) {
                var tableIndices = tableSchema.getIndices();
                tableIndices.forEach(function (indexSchema) {
                    indices.push(_this.indexStore.get(indexSchema.getNormalizedName()));
                }, _this);
                indices.push(_this.indexStore.get(tableSchema.getName() + '.#'));
            }
        }, this);
        return indices;
    };
    Journal.prototype.getScope = function () {
        return this.scope;
    };
    Journal.prototype.insert = function (t, rows) {
        var _this = this;
        var table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        this.constraintChecker.checkForeignKeysForInsert(table, rows, ConstraintTiming.IMMEDIATE);
        rows.forEach(function (row) {
            _this.modifyRow(table, [null, row]);
        }, this);
    };
    Journal.prototype.update = function (t, rows) {
        var _this = this;
        var table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        var modifications = rows.map(function (row) {
            var rowBefore = _this.cache.get(row.id());
            return [rowBefore, row];
        }, this);
        this.updateByCascade(table, modifications);
        this.constraintChecker.checkForeignKeysForUpdate(table, modifications, ConstraintTiming.IMMEDIATE);
        modifications.forEach(function (modification) { return _this.modifyRow(table, modification); });
    };
    Journal.prototype.insertOrReplace = function (t, rows) {
        var _this = this;
        var table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.constraintChecker.checkNotNullable(table, rows);
        rows.forEach(function (rowNow) {
            var rowBefore = null;
            var existingRowId = _this.constraintChecker.findExistingRowIdInPkIndex(table, rowNow);
            if (existingRowId !== undefined && existingRowId !== null) {
                rowBefore = _this.cache.get(existingRowId);
                rowNow.assignRowId(existingRowId);
                var modification = [rowBefore, rowNow];
                _this.constraintChecker.checkForeignKeysForUpdate(table, [modification], ConstraintTiming.IMMEDIATE);
            }
            else {
                _this.constraintChecker.checkForeignKeysForInsert(table, [rowNow], ConstraintTiming.IMMEDIATE);
            }
            _this.modifyRow(table, [rowBefore, rowNow]);
        }, this);
    };
    Journal.prototype.remove = function (t, rows) {
        var _this = this;
        var table = t;
        this.assertJournalWritable();
        this.checkScope(table);
        this.removeByCascade(table, rows);
        this.constraintChecker.checkForeignKeysForDelete(table, rows, ConstraintTiming.IMMEDIATE);
        rows.forEach(function (row) {
            _this.modifyRow(table, [row, null]);
        }, this);
    };
    Journal.prototype.checkDeferredConstraints = function () {
        var _this = this;
        this.tableDiffs.forEach(function (tableDiff) {
            var table = _this.scope.get(tableDiff.getName());
            _this.constraintChecker.checkForeignKeysForInsert(table, Array.from(tableDiff.getAdded().values()), ConstraintTiming.DEFERRABLE);
            _this.constraintChecker.checkForeignKeysForDelete(table, Array.from(tableDiff.getDeleted().values()), ConstraintTiming.DEFERRABLE);
            _this.constraintChecker.checkForeignKeysForUpdate(table, Array.from(tableDiff.getModified().values()), ConstraintTiming.DEFERRABLE);
        }, this);
    };
    Journal.prototype.commit = function () {
        this.assertJournalWritable();
        this.terminated = true;
    };
    Journal.prototype.rollback = function () {
        assert(!this.terminated, 'Attempted to rollback a terminated journal.');
        var reverseDiffs = Array.from(this.tableDiffs.values()).map(function (tableDiff) {
            return tableDiff.getReverse();
        });
        this.inMemoryUpdater.update(reverseDiffs);
        this.terminated = true;
        this.pendingRollback = false;
    };
    Journal.prototype.assertJournalWritable = function () {
        assert(!this.pendingRollback, 'Attempted to use journal that needs to be rolled back.');
        assert(!this.terminated, 'Attempted to commit a terminated journal.');
    };
    Journal.prototype.checkScope = function (tableSchema) {
        if (!this.scope.has(tableSchema.getName())) {
            throw new Exception(ErrorCode.OUT_OF_SCOPE, tableSchema.getName());
        }
    };
    Journal.prototype.modifyRow = function (table, modification) {
        var tableName = table.getName();
        var diff = this.tableDiffs.get(tableName) || new TableDiff(tableName);
        this.tableDiffs.set(tableName, diff);
        try {
            this.inMemoryUpdater.updateTableIndicesForRow(table, modification);
        }
        catch (e) {
            this.pendingRollback = true;
            throw e;
        }
        var rowBefore = modification[0];
        var rowNow = modification[1];
        if (rowBefore === null && rowNow !== null) {
            this.cache.set(tableName, rowNow);
            diff.add(rowNow);
        }
        else if (rowBefore !== null && rowNow !== null) {
            this.cache.set(tableName, rowNow);
            diff.modify(modification);
        }
        else if (rowBefore !== null && rowNow === null) {
            this.cache.remove(tableName, rowBefore.id());
            diff.delete(rowBefore);
        }
    };
    Journal.prototype.updateByCascade = function (table, modifications) {
        var _this = this;
        var foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return;
        }
        var cascadedUpdates = this.constraintChecker.detectCascadeUpdates(table, modifications, foreignKeySpecs);
        cascadedUpdates.keys().forEach(function (rowId) {
            var updates = cascadedUpdates.get(rowId);
            updates.forEach(function (update) {
                var tbl = _this.schema.table(update.fkSpec.childTable);
                var rowBefore = _this.cache.get(rowId);
                var rowAfter = tbl.deserializeRow(rowBefore.serialize());
                rowAfter.payload()[update.fkSpec.childColumn] =
                    update.originalUpdatedRow.payload()[update.fkSpec.parentColumn];
                _this.modifyRow(tbl, [rowBefore, rowAfter]);
            }, _this);
        }, this);
    };
    Journal.prototype.removeByCascade = function (table, deletedRows) {
        var _this = this;
        var foreignKeySpecs = Info.from(this.schema).getReferencingForeignKeys(table.getName(), ConstraintAction.CASCADE);
        if (foreignKeySpecs === null) {
            return;
        }
        var cascadeDeletion = this.constraintChecker.detectCascadeDeletion(table, deletedRows);
        var cascadeRowIds = cascadeDeletion.rowIdsPerTable;
        cascadeDeletion.tableOrder.forEach(function (tableName) {
            var tbl = _this.schema.table(tableName);
            var rows = cascadeRowIds.get(tableName).map(function (rowId) {
                return _this.cache.get(rowId);
            }, _this);
            _this.constraintChecker.checkForeignKeysForDelete(tbl, rows, ConstraintTiming.IMMEDIATE);
            rows.forEach(function (row) {
                _this.modifyRow(tbl, [row, null]);
            }, _this);
        }, this);
    };
    return Journal;
}());
var BaseTx = (function () {
    function BaseTx(txType, journal) {
        this.txType = txType;
        this.journal = journal || null;
        this.resolver = new Resolver();
        this.success = false;
        this.statsObject = null;
    }
    BaseTx.prototype.getJournal = function () {
        return this.journal;
    };
    BaseTx.prototype.commit = function () {
        var _this = this;
        var promise = this.txType === TransactionType.READ_ONLY
            ? this.commitInternal()
            : this.commitReadWrite();
        return promise.then(function (results) {
            _this.success = true;
            return results;
        });
    };
    BaseTx.prototype.stats = function () {
        if (this.statsObject === null) {
            if (!this.success) {
                this.statsObject = TransactionStatsImpl.getDefault();
            }
            else if (this.txType === TransactionType.READ_ONLY) {
                this.statsObject = new TransactionStatsImpl(true, 0, 0, 0, 0);
            }
            else {
                var diff = this.journal.getDiff();
                var insertedRows_1 = 0;
                var deletedRows_1 = 0;
                var updatedRows_1 = 0;
                var tablesChanged_1 = 0;
                diff.forEach(function (tableDiff) {
                    tablesChanged_1++;
                    insertedRows_1 += tableDiff.getAdded().size;
                    updatedRows_1 += tableDiff.getModified().size;
                    deletedRows_1 += tableDiff.getDeleted().size;
                });
                this.statsObject = new TransactionStatsImpl(true, insertedRows_1, updatedRows_1, deletedRows_1, tablesChanged_1);
            }
        }
        return this.statsObject;
    };
    BaseTx.prototype.commitReadWrite = function () {
        var _this = this;
        try {
            this.journal.checkDeferredConstraints();
        }
        catch (e) {
            return Promise.reject(e);
        }
        return this.mergeIntoBackstore().then(function (results) {
            _this.journal.commit();
            return results;
        });
    };
    BaseTx.prototype.mergeIntoBackstore = function () {
        this.mergeTableChanges();
        this.mergeIndexChanges();
        return this.commitInternal();
    };
    BaseTx.prototype.mergeTableChanges = function () {
        var _this = this;
        var journal = this.journal;
        var diff = journal.getDiff();
        diff.forEach(function (tableDiff, tableName) {
            var tableSchema = journal.getScope().get(tableName);
            var table = _this.getTable(tableSchema.getName(), tableSchema.deserializeRow.bind(tableSchema), TableType.DATA);
            var toDeleteRowIds = Array.from(tableDiff.getDeleted().values()).map(function (row) { return row.id(); });
            var toPut = Array.from(tableDiff.getModified().values())
                .map(function (modification) { return modification[1]; })
                .concat(Array.from(tableDiff.getAdded().values()));
            var shouldDisableClearTableOptimization = toPut.length > 0;
            if (toDeleteRowIds.length > 0) {
                table.remove(toDeleteRowIds, shouldDisableClearTableOptimization).then(function () { }, function (e) { return _this.resolver.reject(e); });
            }
            table.put(toPut).then(function () { }, function (e) { return _this.resolver.reject(e); });
        }, this);
    };
    BaseTx.prototype.mergeIndexChanges = function () {
        var _this = this;
        var indices = this.journal.getIndexDiff();
        indices.forEach(function (index) {
            var indexTable = _this.getTable(index.getName(), Row.deserialize, TableType.INDEX);
            indexTable.remove([]);
            indexTable.put(index.serialize());
        }, this);
    };
    return BaseTx;
}());
var Page = (function () {
    function Page(id, payload) {
        if (payload === void 0) { payload = {}; }
        this.id = id;
        this.payload = payload;
    }
    Page.deserialize = function (data) {
        return new Page(data.id, JSON.parse(data.value));
    };
    Page.toPageIds = function (rowIds) {
        var pageIds = new Set();
        rowIds.forEach(function (id) { return pageIds.add(Page.toPageId(id)); });
        return Array.from(pageIds.values());
    };
    Page.toPageId = function (rowId) {
        return rowId >> Page.BUNDLE_EXPONENT;
    };
    Page.getPageRange = function (pageId) {
        return [
            pageId << Page.BUNDLE_EXPONENT,
            ((pageId + 1) << Page.BUNDLE_EXPONENT) - 1,
        ];
    };
    Page.prototype.getId = function () {
        return this.id;
    };
    Page.prototype.getPayload = function () {
        return this.payload;
    };
    Page.prototype.setRows = function (rows) {
        var _this = this;
        rows.forEach(function (row) { return (_this.payload[row.id()] = row.serialize()); });
    };
    Page.prototype.removeRows = function (ids) {
        var _this = this;
        ids.forEach(function (id) { return delete _this.payload[id]; });
    };
    Page.prototype.serialize = function () {
        return {
            id: this.id,
            value: JSON.stringify(this.payload),
        };
    };
    Page.BUNDLE_EXPONENT = 9;
    return Page;
}());
var BundledObjectStore = (function () {
    function BundledObjectStore(store, deserializeFn, retrievePageFn) {
        this.store = store;
        this.deserializeFn = deserializeFn;
        this.retrievePageFn = retrievePageFn;
    }
    BundledObjectStore.forTableType = function (global, store, deserializeFn, tableType) {
        var retrievePageFn = tableType === TableType.DATA
            ? BundledObjectStore.getDataTablePage.bind(null, global)
            : BundledObjectStore.getIndexTablePage;
        return new BundledObjectStore(store, deserializeFn, retrievePageFn);
    };
    BundledObjectStore.getDataTablePage = function (global, tableName, pageId) {
        var cache = global.getService(Service.CACHE);
        var range = Page.getPageRange(pageId);
        var rows = cache.getRange(tableName, range[0], range[1]);
        var page = new Page(pageId);
        page.setRows(rows);
        return page;
    };
    BundledObjectStore.getIndexTablePage = function (tableName, pageId) {
        return new Page(pageId);
    };
    BundledObjectStore.prototype.get = function (ids) {
        var _this = this;
        if (ids.length === 0) {
            return this.getAll();
        }
        return this.getPagesByRowIds(ids).then(function (pages) {
            return ids.map(function (id) {
                var page = pages.get(Page.toPageId(id));
                assert(page !== undefined, 'Containing page is empty');
                return _this.deserializeFn(page.getPayload()[id]);
            });
        });
    };
    BundledObjectStore.prototype.put = function (rows) {
        var _this = this;
        if (rows.length === 0) {
            return Promise.resolve();
        }
        var pages = new Map();
        rows.forEach(function (row) {
            var pageId = Page.toPageId(row.id());
            var page = pages.get(pageId) || null;
            if (page === null) {
                page = _this.retrievePageFn(_this.store.name, pageId);
            }
            page.setRows([row]);
            pages.set(pageId, page);
        }, this);
        var promises = Array.from(pages.values()).map(function (page) {
            return _this.performWriteOp(function () {
                return _this.store.put(page.serialize());
            });
        }, this);
        return Promise.all(promises).then(function () {
            return;
        });
    };
    BundledObjectStore.prototype.remove = function (ids, disableClearTableOptimization) {
        var _this = this;
        if (ids.length === 0) {
            return this.performWriteOp(function () { return _this.store.clear(); });
        }
        var pages = new Map();
        ids.forEach(function (id) {
            var pageId = Page.toPageId(id);
            var page = pages.get(pageId) || null;
            if (page === null) {
                page = _this.retrievePageFn(_this.store.name, pageId);
            }
            page.removeRows([id]);
            pages.set(pageId, page);
        }, this);
        var promises = Array.from(pages.values()).map(function (page) {
            return _this.performWriteOp(function () {
                return Object.keys(page.getPayload()).length === 0
                    ? _this.store.delete(page.getId())
                    : _this.store.put(page.serialize());
            });
        }, this);
        return Promise.all(promises).then(function () {
            return;
        });
    };
    BundledObjectStore.prototype.getPagesByRowIds = function (rowIds) {
        var _this = this;
        var results = new Map();
        var resolver = new Resolver();
        var pageIds = Page.toPageIds(rowIds);
        var promises = pageIds.map(function (id) {
            return new Promise(function (resolve, reject) {
                var request;
                try {
                    request = _this.store.get(id);
                }
                catch (e) {
                    reject(e);
                    return;
                }
                request.onerror = reject;
                request.onsuccess = function (ev) {
                    var page = Page.deserialize(ev.target.result);
                    results.set(page.getId(), page);
                    resolve(undefined);
                };
            });
        }, this);
        Promise.all(promises).then(function () { return resolver.resolve(results); });
        return resolver.promise;
    };
    BundledObjectStore.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var rows = [];
            var request;
            try {
                request = _this.store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = reject;
            request.onsuccess = function () {
                var cursor = request.result;
                if (cursor) {
                    var page = Page.deserialize(cursor.value);
                    var data_1 = page.getPayload();
                    Object.keys(data_1).forEach(function (key) {
                        return rows.push(_this.deserializeFn(data_1[key]));
                    });
                    cursor.continue();
                }
                else {
                    resolve(rows);
                }
            };
        });
    };
    BundledObjectStore.prototype.performWriteOp = function (reqFactory) {
        return new Promise(function (resolve, reject) {
            var request;
            try {
                request = reqFactory();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onsuccess = function () { return resolve(); };
            request.onerror = reject;
        });
    };
    return BundledObjectStore;
}());
var ExternalChangeTask = (function (_super) {
    __extends(ExternalChangeTask, _super);
    function ExternalChangeTask(global, tableDiffs) {
        var _this = _super.call(this) || this;
        _this.global = global;
        _this.tableDiffs = tableDiffs;
        _this.observerRegistry = _this.global.getService(Service.OBSERVER_REGISTRY);
        _this.runner = _this.global.getService(Service.RUNNER);
        _this.inMemoryUpdater = new InMemoryUpdater(_this.global);
        var dbSchema = _this.global.getService(Service.SCHEMA);
        var tableSchemas = _this.tableDiffs.map(function (td) {
            return dbSchema.table(td.getName());
        });
        _this.scope = new Set(tableSchemas);
        _this.resolver = new Resolver();
        return _this;
    }
    ExternalChangeTask.prototype.exec = function () {
        this.inMemoryUpdater.update(this.tableDiffs);
        this.scheduleObserverTask();
        return Promise.resolve([]);
    };
    ExternalChangeTask.prototype.getType = function () {
        return TransactionType.READ_WRITE;
    };
    ExternalChangeTask.prototype.getScope = function () {
        return this.scope;
    };
    ExternalChangeTask.prototype.getResolver = function () {
        return this.resolver;
    };
    ExternalChangeTask.prototype.getId = function () {
        return this.getUniqueNumber();
    };
    ExternalChangeTask.prototype.getPriority = function () {
        return TaskPriority.EXTERNAL_CHANGE_TASK;
    };
    ExternalChangeTask.prototype.scheduleObserverTask = function () {
        var items = this.observerRegistry.getTaskItemsForTables(Array.from(this.scope.values()));
        if (items.length !== 0) {
            var observerTask = new ObserverQueryTask(this.global, items);
            this.runner.scheduleTask(observerTask);
        }
    };
    return ExternalChangeTask;
}(UniqueId));
var ExternalChangeObserver = (function () {
    function ExternalChangeObserver(global) {
        this.global = global;
        this.backStore = global.getService(Service.BACK_STORE);
        this.runner = global.getService(Service.RUNNER);
    }
    ExternalChangeObserver.prototype.startObserving = function () {
        this.backStore.subscribe(this.onChange.bind(this));
    };
    ExternalChangeObserver.prototype.stopObserving = function () {
        this.backStore.unsubscribe(this.onChange.bind(this));
    };
    ExternalChangeObserver.prototype.onChange = function (tableDiffs) {
        var externalChangeTask = new ExternalChangeTask(this.global, tableDiffs);
        this.runner.scheduleTask(externalChangeTask);
    };
    return ExternalChangeObserver;
}());
var IndexedDBRawBackStore = (function () {
    function IndexedDBRawBackStore(version, db, tx, bundleMode) {
        this.version = version;
        this.db = db;
        this.tx = tx;
        this.bundleMode = bundleMode;
    }
    IndexedDBRawBackStore.convert = function (value) {
        var ret = null;
        if (value instanceof ArrayBuffer) {
            ret = Row.binToHex(value);
        }
        else if (value instanceof Date) {
            ret = value.getTime();
        }
        else {
            ret = value;
        }
        return ret;
    };
    IndexedDBRawBackStore.prototype.getRawDBInstance = function () {
        return this.db;
    };
    IndexedDBRawBackStore.prototype.getRawTransaction = function () {
        return this.tx;
    };
    IndexedDBRawBackStore.prototype.dropTable = function (tableName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.db.deleteObjectStore(tableName);
            }
            catch (e) {
                reject(e);
                return;
            }
            resolve();
        });
    };
    IndexedDBRawBackStore.prototype.addTableColumn = function (tableName, columnName, defaultValue) {
        var value = IndexedDBRawBackStore.convert(defaultValue);
        return this.transformRows(tableName, function (row) {
            row.payload()[columnName] = value;
        });
    };
    IndexedDBRawBackStore.prototype.dropTableColumn = function (tableName, columnName) {
        return this.transformRows(tableName, function (row) {
            delete row.payload()[columnName];
        });
    };
    IndexedDBRawBackStore.prototype.renameTableColumn = function (tableName, oldColumnName, newColumnName) {
        return this.transformRows(tableName, function (row) {
            row.payload()[newColumnName] = row.payload()[oldColumnName];
            delete row.payload()[oldColumnName];
        });
    };
    IndexedDBRawBackStore.prototype.createRow = function (payload) {
        var data = {};
        Object.keys(payload).forEach(function (key) {
            data[key] = IndexedDBRawBackStore.convert(payload[key]);
        });
        return Row.create(data);
    };
    IndexedDBRawBackStore.prototype.getVersion = function () {
        return this.version;
    };
    IndexedDBRawBackStore.prototype.dump = function () {
        var tables = this.db.objectStoreNames;
        var promises = [];
        for (var i = 0; i < tables.length; ++i) {
            var tableName = tables.item(i);
            promises.push(this.dumpTable(tableName));
        }
        return Promise.all(promises).then(function (tableDumps) {
            var results = {};
            tableDumps.forEach(function (tableDump, index) {
                results[tables.item(index)] = tableDump;
            });
            return results;
        });
    };
    IndexedDBRawBackStore.prototype.openCursorForWrite = function (tableName, loopFunc, endFunc) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var req;
            var store;
            try {
                store = _this.tx.objectStore(tableName);
                req = store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            req.onsuccess = function () {
                var cursor = req.result;
                if (cursor) {
                    loopFunc(cursor);
                    cursor.continue();
                }
                else {
                    endFunc(store);
                    resolve();
                }
            };
            req.onerror = reject;
        });
    };
    IndexedDBRawBackStore.prototype.transformRows = function (tableName, rowFn) {
        var loopFunc = function (cursor) {
            var row = Row.deserialize(cursor.value);
            rowFn(row);
            cursor.update(row.serialize());
        };
        var loopFuncBundle = function (cursor) {
            var page = Page.deserialize(cursor.value);
            var data = page.getPayload();
            Object.keys(data).forEach(function (rowId) {
                var row = Row.deserialize(data[rowId]);
                rowFn(row);
                data[rowId] = row.serialize();
            });
            cursor.update(page.serialize());
        };
        var endFunc = function () {
            return;
        };
        return this.openCursorForWrite(tableName, this.bundleMode ? loopFuncBundle : loopFunc, endFunc);
    };
    IndexedDBRawBackStore.prototype.getTableRows = function (tableName) {
        var _this = this;
        var results = [];
        return new Promise(function (resolve, reject) {
            var req;
            try {
                req = _this.tx.objectStore(tableName).openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            req.onsuccess = function () {
                var cursor = req.result;
                if (cursor) {
                    if (_this.bundleMode) {
                        var page = Page.deserialize(cursor.value);
                        var data_2 = page.getPayload();
                        Object.keys(data_2).forEach(function (rowId) {
                            results.push(data_2[rowId]);
                        });
                    }
                    else {
                        results.push(cursor.value);
                    }
                    cursor.continue();
                }
                else {
                    resolve(results);
                }
            };
            req.onerror = reject;
        });
    };
    IndexedDBRawBackStore.prototype.dumpTable = function (tableName) {
        return this.getTableRows(tableName).then(function (rawRows) {
            return rawRows.map(function (rawRow) { return rawRow.value; });
        });
    };
    return IndexedDBRawBackStore;
}());
var ObjectStore = (function () {
    function ObjectStore(store, deserializeFn) {
        this.store = store;
        this.deserializeFn = deserializeFn;
    }
    ObjectStore.prototype.get = function (ids) {
        var _this = this;
        if (ids.length === 0) {
            var options_1 = Global.get().getOptions();
            return options_1.useGetAll ? this.getAllBulk() : this.getAllWithCursor();
        }
        var promises = ids.map(function (id) {
            return new Promise(function (resolve, reject) {
                var request;
                try {
                    request = _this.store.get(id);
                }
                catch (e) {
                    reject(e);
                    return;
                }
                request.onerror = reject;
                request.onsuccess = function (ev) {
                    resolve(_this.deserializeFn(ev.target.result));
                };
            });
        }, this);
        return Promise.all(promises);
    };
    ObjectStore.prototype.put = function (rows) {
        var _this = this;
        if (rows.length === 0) {
            return Promise.resolve();
        }
        var promises = rows.map(function (row) {
            return _this.performWriteOp(function () {
                return _this.store.put(row.serialize());
            });
        }, this);
        return Promise.all(promises).then(function () {
            return;
        });
    };
    ObjectStore.prototype.remove = function (ids, disableClearTableOptimization) {
        var _this = this;
        var deleteByIdsFn = function () {
            var promises = ids.map(function (id) {
                return _this.performWriteOp(function () { return _this.store.delete(id); });
            });
            return Promise.all(promises).then(function () {
                return;
            });
        };
        if (disableClearTableOptimization) {
            return deleteByIdsFn();
        }
        return new Promise(function (resolve, reject) {
            var request = _this.store.count();
            request.onsuccess = function (ev) {
                if (ids.length === 0 ||
                    ev.target.result === ids.length) {
                    _this.performWriteOp(function () { return _this.store.clear(); }).then(resolve, reject);
                    return;
                }
                deleteByIdsFn().then(resolve, reject);
            };
            request.onerror = reject;
        });
    };
    ObjectStore.prototype.getAllWithCursor = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var rows = [];
            var request;
            try {
                request = _this.store.openCursor();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = reject;
            request.onsuccess = function () {
                var cursor = request.result;
                if (cursor) {
                    rows.push(_this.deserializeFn(cursor.value));
                    cursor.continue();
                }
                else {
                    resolve(rows);
                }
            };
        });
    };
    ObjectStore.prototype.getAllBulk = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request;
            try {
                request = _this.store.getAll();
            }
            catch (e) {
                reject(new Exception(ErrorCode.CANT_LOAD_IDB, e.name, e.message));
                return;
            }
            request.onerror = reject;
            request.onsuccess = function () {
                try {
                    var rows = request.result.map(function (rawRow) {
                        return _this.deserializeFn(rawRow);
                    });
                    resolve(rows);
                }
                catch (e) {
                    reject(new Exception(ErrorCode.CANT_READ_IDB, e.name, e.message));
                }
            };
        });
    };
    ObjectStore.prototype.performWriteOp = function (reqFactory) {
        return new Promise(function (resolve, reject) {
            var request;
            try {
                request = reqFactory();
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onsuccess = function () { return resolve(); };
            request.onerror = reject;
        });
    };
    return ObjectStore;
}());
var IndexedDBTx = (function (_super) {
    __extends(IndexedDBTx, _super);
    function IndexedDBTx(global, tx, txType, bundleMode, journal) {
        var _this = _super.call(this, txType, journal) || this;
        _this.global = global;
        _this.tx = tx;
        _this.bundleMode = bundleMode;
        _this.tx.oncomplete = function () {
            _this.resolver.resolve();
        };
        _this.tx.onabort = function (ev) {
            _this.resolver.reject(ev);
        };
        return _this;
    }
    IndexedDBTx.prototype.getTable = function (tableName, deserializeFn, type) {
        if (this.bundleMode) {
            var tableType = type !== undefined && type !== null ? type : TableType.DATA;
            return BundledObjectStore.forTableType(this.global, this.tx.objectStore(tableName), deserializeFn, tableType);
        }
        else {
            return new ObjectStore(this.tx.objectStore(tableName), deserializeFn);
        }
    };
    IndexedDBTx.prototype.abort = function () {
        this.tx.abort();
    };
    IndexedDBTx.prototype.commitInternal = function () {
        return this.resolver.promise;
    };
    return IndexedDBTx;
}(BaseTx));
var window = this || window;
var IndexedDB = (function () {
    function IndexedDB(global, schema) {
        this.global = global;
        this.schema = schema;
        this.bundledMode = this.schema.pragma().enableBundledMode || false;
    }
    IndexedDB.prototype.init = function (upgrade) {
        var _this = this;
        var indexedDB = window.indexedDB;
        if (indexedDB === undefined || indexedDB === null) {
            throw new Exception(ErrorCode.IDB_NOT_PROVIDED);
        }
        var onUpgrade = upgrade || (function (rawDb) { return Promise.resolve(); });
        return new Promise(function (resolve, reject) {
            var request;
            try {
                request = indexedDB.open(_this.schema.name(), _this.schema.version());
            }
            catch (e) {
                reject(e);
                return;
            }
            request.onerror = function (e) {
                var error = e.target
                    .error;
                reject(new Exception(ErrorCode.CANT_OPEN_IDB, error.name, error.message));
            };
            request.onupgradeneeded = function (ev) {
                _this.onUpgradeNeeded(onUpgrade, ev).then(function () {
                    return;
                }, reject);
            };
            request.onsuccess = function (ev) {
                _this.db = ev.target.result;
                _this.scanRowId().then(function (rowId) {
                    Row.setNextIdIfGreater(rowId + 1);
                    resolve(_this.db);
                });
            };
        });
    };
    IndexedDB.prototype.createTx = function (type, scope, journal) {
        var nativeTx = this.db.transaction(this.getIndexedDBScope(scope), type === TransactionType.READ_ONLY ? 'readonly' : 'readwrite');
        return new IndexedDBTx(this.global, nativeTx, type, this.bundledMode, journal);
    };
    IndexedDB.prototype.close = function () {
        this.db.close();
    };
    IndexedDB.prototype.getTableInternal = function (tableName) {
        throw new Exception(ErrorCode.CANT_GET_IDB_TABLE);
    };
    IndexedDB.prototype.subscribe = function (handler) {
    };
    IndexedDB.prototype.unsubscribe = function (handler) {
    };
    IndexedDB.prototype.notify = function (changes) {
    };
    IndexedDB.prototype.supportsImport = function () {
        return true;
    };
    IndexedDB.prototype.peek = function () {
        return this.db;
    };
    IndexedDB.prototype.onUpgradeNeeded = function (onUpgrade, ev) {
        var db = ev.target.result;
        var tx = ev.target.transaction;
        var rawDb = new IndexedDBRawBackStore(ev.oldVersion, db, tx, this.bundledMode);
        this.removeIndexTables(db);
        this.createTables(db);
        return onUpgrade(rawDb);
    };
    IndexedDB.prototype.removeIndexTables = function (db) {
        var storeNames = [];
        for (var i = 0; i < db.objectStoreNames.length; ++i) {
            var name_1 = db.objectStoreNames.item(i);
            if (name_1.indexOf('.') !== -1) {
                storeNames.push(name_1);
            }
        }
        storeNames.forEach(function (store) {
            try {
                db.deleteObjectStore(store);
            }
            catch (e) {
            }
        });
    };
    IndexedDB.prototype.createTables = function (db) {
        var _this = this;
        this.schema.tables().forEach(function (table) {
            _this.createObjectStoresForTable(db, table);
        }, this);
    };
    IndexedDB.prototype.createObjectStoresForTable = function (db, tableSchema) {
        var _this = this;
        if (!db.objectStoreNames.contains(tableSchema.getName())) {
            db.createObjectStore(tableSchema.getName(), { keyPath: 'id' });
        }
        if (tableSchema.persistentIndex()) {
            var tableIndices = tableSchema.getIndices();
            tableIndices.forEach(function (indexSchema) {
                _this.createIndexTable(db, indexSchema.getNormalizedName());
            }, this);
            this.createIndexTable(db, tableSchema.getRowIdIndexName());
        }
    };
    IndexedDB.prototype.createIndexTable = function (db, indexName) {
        if (!db.objectStoreNames.contains(indexName)) {
            db.createObjectStore(indexName, { keyPath: 'id' });
        }
    };
    IndexedDB.prototype.getIndexedDBScope = function (scope) {
        var indexedDBScope = new Set();
        scope.forEach(function (tableSchema) {
            indexedDBScope.add(tableSchema.getName());
            if (tableSchema.persistentIndex()) {
                var tableIndices = tableSchema.getIndices();
                tableIndices.forEach(function (indexSchema) {
                    return indexedDBScope.add(indexSchema.getNormalizedName());
                });
                indexedDBScope.add(tableSchema.getRowIdIndexName());
            }
        });
        return Array.from(indexedDBScope.values());
    };
    IndexedDB.prototype.scanRowId = function (txIn) {
        var _this = this;
        var tableNames = this.schema.tables().map(function (table) { return table.getName(); });
        var db = this.db;
        var maxRowId = 0;
        var extractRowId = function (cursor) {
            if (_this.bundledMode) {
                var page = Page.deserialize(cursor.value);
                return Object.keys(page.getPayload()).reduce(function (prev, cur) {
                    return Math.max(prev, Number(cur));
                }, 0);
            }
            return cursor.key;
        };
        var scanTableRowId = function (tableName) {
            return new Promise(function (resolve, reject) {
                var req;
                try {
                    var tx = txIn || db.transaction([tableName]);
                    req = tx.objectStore(tableName).openCursor(undefined, 'prev');
                }
                catch (e) {
                    reject(e);
                    return;
                }
                req.onsuccess = function (ev) {
                    var cursor = ev.target.result;
                    if (cursor) {
                        maxRowId = Math.max(maxRowId, extractRowId(cursor));
                    }
                    resolve(maxRowId);
                };
                req.onerror = function () { return resolve(maxRowId); };
            });
        };
        var execSequentially = function () {
            if (tableNames.length === 0) {
                return Promise.resolve();
            }
            var tableName = tableNames.shift();
            return scanTableRowId(tableName).then(execSequentially);
        };
        return new Promise(function (resolve) {
            execSequentially().then(function () { return resolve(maxRowId); });
        });
    };
    return IndexedDB;
}());
var window = this || window;
var LocalStorageTable = (function () {
    function LocalStorageTable(tableKey) {
        this.key = tableKey;
        this.data = {};
        var rawData = window.localStorage.getItem(tableKey);
        if (rawData) {
            this.data = JSON.parse(rawData);
        }
    }
    LocalStorageTable.prototype.get = function (ids) {
        var _this = this;
        var results;
        if (ids.length === 0) {
            results = Object.keys(this.data).map(function (key) {
                var id = Number(key);
                return new Row(id, _this.data[key]);
            }, this);
        }
        else {
            results = [];
            ids.forEach(function (id) {
                if (Object.prototype.hasOwnProperty.call(_this.data, id.toString())) {
                    results.push(new Row(id, _this.data[id.toString()]));
                }
            }, this);
        }
        return Promise.resolve(results);
    };
    LocalStorageTable.prototype.put = function (rows) {
        var _this = this;
        rows.forEach(function (row) {
            _this.data[row.id().toString()] = row.payload();
        }, this);
        return Promise.resolve();
    };
    LocalStorageTable.prototype.remove = function (ids, disableClearTableOptimization) {
        var _this = this;
        if (ids.length === 0 || ids.length === Object.keys(this.data).length) {
            this.data = {};
        }
        else {
            ids.forEach(function (id) { return delete _this.data[id]; });
        }
        return Promise.resolve();
    };
    LocalStorageTable.prototype.commit = function () {
        window.localStorage.setItem(this.key, JSON.stringify(this.data));
    };
    LocalStorageTable.prototype.diff = function (newData) {
        var _this = this;
        var oldIds = Object.keys(this.data);
        var newIds = Object.keys(newData);
        var diff = new TableDiff(this.key);
        newIds.forEach(function (id) {
            var rowId = Number(id);
            if (Object.prototype.hasOwnProperty.call(_this.data, id)) {
                if (JSON.stringify(_this.data[id]) !== JSON.stringify(newData[id])) {
                    diff.modify([
                        new Row(rowId, _this.data[id]),
                        new Row(rowId, newData[id]),
                    ]);
                }
            }
            else {
                diff.add(new Row(rowId, newData[id]));
            }
        }, this);
        oldIds
            .filter(function (id) { return Object.prototype.hasOwnProperty.call(newData, id); })
            .forEach(function (id) {
            diff.delete(new Row(Number(id), _this.data[id]));
        }, this);
        return diff;
    };
    return LocalStorageTable;
}());
var window = this || window;
var LocalStorage = (function () {
    function LocalStorage(dbSchema) {
        this.schema = dbSchema;
        this.tables = new Map();
        this.changeHandler = null;
        this.listener = null;
    }
    LocalStorage.prototype.init = function (onUpgrade) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.initSync();
            resolve();
        });
    };
    LocalStorage.prototype.createTx = function (type, scope, journal) {
        return new LocalStorageTx(this, type, journal);
    };
    LocalStorage.prototype.close = function () {
    };
    LocalStorage.prototype.getTableInternal = function (tableName) {
        if (!this.tables.has(tableName)) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return this.tables.get(tableName);
    };
    LocalStorage.prototype.subscribe = function (handler) {
        this.changeHandler = handler;
        if (this.listener) {
            return;
        }
        this.listener = this.onStorageEvent.bind(this);
        window.addEventListener('storage', this.listener, false);
    };
    LocalStorage.prototype.unsubscribe = function (handler) {
        if (this.listener) {
            window.removeEventListener('storage', this.listener, false);
            this.listener = null;
            this.changeHandler = null;
        }
    };
    LocalStorage.prototype.notify = function (changes) {
        if (this.changeHandler) {
            this.changeHandler(changes);
        }
    };
    LocalStorage.prototype.supportsImport = function () {
        return false;
    };
    LocalStorage.prototype.commit = function () {
        this.tables.forEach(function (table) { return table.commit(); });
    };
    LocalStorage.prototype.initSync = function () {
        if (!window.localStorage) {
            throw new Exception(ErrorCode.LOCAL_STORAGE_NOT_PROVIDED);
        }
        var versionKey = "".concat(this.schema.name(), ".version#");
        var version = window.localStorage.getItem(versionKey);
        if (version !== undefined && version !== null) {
            if (version !== this.schema.version().toString()) {
                throw new Exception(ErrorCode.NOT_IMPLEMENTED);
            }
            this.loadTables();
        }
        else {
            this.loadTables();
            window.localStorage.setItem(versionKey, this.schema.version().toString());
            this.commit();
        }
    };
    LocalStorage.prototype.loadTables = function () {
        var _this = this;
        var prefix = this.schema.name() + '.';
        this.schema.tables().forEach(function (table) {
            var tableName = table.getName();
            _this.tables.set(tableName, new LocalStorageTable(prefix + tableName));
            if (table.persistentIndex()) {
                var indices = table.getIndices();
                indices.forEach(function (index) {
                    var indexName = index.getNormalizedName();
                    _this.tables.set(indexName, new LocalStorageTable(prefix + indexName));
                }, _this);
            }
        }, this);
    };
    LocalStorage.prototype.onStorageEvent = function (ev) {
        var key = ev.key;
        if (ev.storageArea !== window.localStorage ||
            key.indexOf(this.schema.name() + '.') !== 0) {
            return;
        }
        var newValue = window.localStorage.getItem(key);
        var newData = {};
        if (newValue !== null) {
            try {
                newData = JSON.parse(newValue);
            }
            catch (e) {
                return;
            }
        }
        var tableName = key.slice(this.schema.name().length + 1);
        var table = this.tables.get(tableName);
        if (table && this.changeHandler) {
            this.changeHandler([table.diff(newData)]);
        }
    };
    return LocalStorage;
}());
var LocalStorageTx = (function (_super) {
    __extends(LocalStorageTx, _super);
    function LocalStorageTx(store, type, journal) {
        var _this = _super.call(this, type, journal) || this;
        _this.store = store;
        if (type === TransactionType.READ_ONLY) {
            _this.resolver.resolve();
        }
        return _this;
    }
    LocalStorageTx.prototype.getTable = function (tableName, deserializeFn, tableType) {
        return this.store.getTableInternal(tableName);
    };
    LocalStorageTx.prototype.abort = function () {
        this.resolver.reject();
    };
    LocalStorageTx.prototype.commitInternal = function () {
        this.store.commit();
        this.resolver.resolve();
        return this.resolver.promise;
    };
    return LocalStorageTx;
}(BaseTx));
var MemoryTable = (function () {
    function MemoryTable() {
        this.data = new Map();
    }
    MemoryTable.prototype.getSync = function (ids) {
        var _this = this;
        if (ids.length === 0) {
            return Array.from(this.data.values());
        }
        var results = [];
        ids.forEach(function (id) {
            var row = _this.data.get(id) || null;
            if (row !== null) {
                results.push(row);
            }
        }, this);
        return results;
    };
    MemoryTable.prototype.getData = function () {
        return this.data;
    };
    MemoryTable.prototype.get = function (ids) {
        return Promise.resolve(this.getSync(ids));
    };
    MemoryTable.prototype.putSync = function (rows) {
        var _this = this;
        rows.forEach(function (row) { return _this.data.set(row.id(), row); });
    };
    MemoryTable.prototype.put = function (rows) {
        this.putSync(rows);
        return Promise.resolve();
    };
    MemoryTable.prototype.removeSync = function (ids) {
        var _this = this;
        if (ids.length === 0 || ids.length === this.data.size) {
            this.data.clear();
        }
        else {
            ids.forEach(function (id) { return _this.data.delete(id); });
        }
    };
    MemoryTable.prototype.remove = function (ids) {
        this.removeSync(ids);
        return Promise.resolve();
    };
    MemoryTable.prototype.getMaxRowId = function () {
        if (this.data.size === 0) {
            return 0;
        }
        return Array.from(this.data.keys()).reduce(function (prev, cur) {
            return prev > cur ? prev : cur;
        }, 0);
    };
    return MemoryTable;
}());
var Memory = (function () {
    function Memory(schema) {
        this.schema = schema;
        this.tables = new Map();
    }
    Memory.prototype.init = function (onUpgrade) {
        var _this = this;
        this.schema.tables().forEach(function (table) { return _this.initTable(table); }, this);
        return Promise.resolve();
    };
    Memory.prototype.getTableInternal = function (tableName) {
        var table = this.tables.get(tableName) || null;
        if (table === null) {
            throw new Exception(ErrorCode.TABLE_NOT_FOUND, tableName);
        }
        return table;
    };
    Memory.prototype.createTx = function (type, scope, journal) {
        return new MemoryTx(this, type, journal);
    };
    Memory.prototype.close = function () {
    };
    Memory.prototype.subscribe = function (handler) {
    };
    Memory.prototype.unsubscribe = function (handler) {
    };
    Memory.prototype.notify = function (changes) {
    };
    Memory.prototype.supportsImport = function () {
        return true;
    };
    Memory.prototype.peek = function () {
        return this.tables;
    };
    Memory.prototype.createTable = function (tableName) {
        if (!this.tables.has(tableName)) {
            this.tables.set(tableName, new MemoryTable());
        }
    };
    Memory.prototype.initTable = function (tableSchema) {
        var _this = this;
        this.createTable(tableSchema.getName());
        if (tableSchema.persistentIndex()) {
            tableSchema.getIndices().forEach(function (indexSchema) {
                _this.createTable(indexSchema.getNormalizedName());
            }, this);
            this.createTable(tableSchema.getRowIdIndexName());
        }
    };
    return Memory;
}());
var MemoryTx = (function (_super) {
    __extends(MemoryTx, _super);
    function MemoryTx(store, type, journal) {
        var _this = _super.call(this, type, journal) || this;
        _this.store = store;
        if (type === TransactionType.READ_ONLY) {
            _this.resolver.resolve();
        }
        return _this;
    }
    MemoryTx.prototype.getTable = function (tableName, deserializeFn, tableType) {
        return this.store.getTableInternal(tableName);
    };
    MemoryTx.prototype.abort = function () {
        this.resolver.reject();
    };
    MemoryTx.prototype.commitInternal = function () {
        this.resolver.resolve();
        return this.resolver.promise;
    };
    return MemoryTx;
}(BaseTx));
var ObservableStore = (function (_super) {
    __extends(ObservableStore, _super);
    function ObservableStore(schema) {
        var _this = _super.call(this, schema) || this;
        _this.observer = null;
        return _this;
    }
    ObservableStore.prototype.subscribe = function (handler) {
        if (this.observer === null) {
            this.observer = handler;
        }
    };
    ObservableStore.prototype.unsubscribe = function (handler) {
        this.observer = null;
    };
    ObservableStore.prototype.notify = function (changes) {
        if (this.observer !== null) {
            this.observer(changes);
        }
    };
    ObservableStore.prototype.supportsImport = function () {
        return false;
    };
    return ObservableStore;
}(Memory));
var WebSqlTable = (function () {
    function WebSqlTable(tx, name, deserializeFn) {
        this.tx = tx;
        this.deserializeFn = deserializeFn;
        this.name = "\"".concat(name, "\"");
    }
    WebSqlTable.prototype.get = function (ids) {
        var where = ids.length === 0 ? '' : "WHERE id IN (".concat(ids.join(','), ")");
        var sql = "SELECT id, value FROM ".concat(this.name, " ").concat(where);
        var deserializeFn = this.deserializeFn;
        var transformer = function (res) {
            var results = res;
            var length = results.rows.length;
            var rows = new Array(length);
            for (var i = 0; i < length; ++i) {
                rows[i] = deserializeFn({
                    id: results.rows.item(i)['id'],
                    value: JSON.parse(results.rows.item(i)['value']),
                });
            }
            return rows;
        };
        return this.tx.queue(sql, [], transformer);
    };
    WebSqlTable.prototype.put = function (rows) {
        var _this = this;
        if (rows.length === 0) {
            return Promise.resolve();
        }
        var sql = "INSERT OR REPLACE INTO ".concat(this.name, " (id, value) VALUES (?, ?)");
        rows.forEach(function (row) {
            _this.tx.queue(sql, [row.id(), JSON.stringify(row.payload())]);
        }, this);
        return Promise.resolve();
    };
    WebSqlTable.prototype.remove = function (ids, disableClearTableOptimization) {
        var where = ids.length === 0 ? '' : "WHERE id IN (".concat(ids.join(','), ")");
        var sql = "DELETE FROM ".concat(this.name, " ").concat(where);
        this.tx.queue(sql, []);
        return Promise.resolve();
    };
    return WebSqlTable;
}());
var WebSqlTx = (function (_super) {
    __extends(WebSqlTx, _super);
    function WebSqlTx(db, txType, journal) {
        var _this = _super.call(this, txType, journal) || this;
        _this.db = db;
        _this.tables = new Map();
        _this.commands = [];
        return _this;
    }
    WebSqlTx.escapeTableName = function (tableName) {
        return tableName.replace('.', WebSqlTx.INDEX_MARK).replace('#', '__s__');
    };
    WebSqlTx.prototype.getTable = function (tableName, deserializeFn, tableType) {
        var table = this.tables.get(tableName) || null;
        if (table === null) {
            table = new WebSqlTable(this, WebSqlTx.escapeTableName(tableName), deserializeFn);
            this.tables.set(tableName, table);
        }
        return table;
    };
    WebSqlTx.prototype.queue = function (statement, params, transform) {
        var resolver = new Resolver();
        this.commands.push({
            params: params,
            resolver: resolver,
            statement: statement,
            transform: transform,
        });
        return resolver.promise;
    };
    WebSqlTx.prototype.abort = function () {
        this.commands = [];
    };
    WebSqlTx.prototype.commitInternal = function () {
        var _this = this;
        var lastCommand = null;
        var onTxError = this.resolver.reject.bind(this.resolver);
        var onExecError = function (tx, e) {
            _this.resolver.reject(e);
            return false;
        };
        var results = [];
        var callback = function (tx, res) {
            if (lastCommand !== null) {
                var ret = res;
                if (lastCommand.transform && res !== null && res !== undefined) {
                    ret = lastCommand.transform(res);
                }
                results.push(ret);
                lastCommand.resolver.resolve(ret);
            }
            if (_this.commands.length > 0) {
                var command = _this.commands.shift();
                lastCommand = command;
                tx.executeSql(command.statement, command.params, callback, onExecError);
            }
            else {
                _this.resolver.resolve(results);
            }
        };
        if (this.txType === TransactionType.READ_ONLY) {
            this.db.readTransaction(callback, onTxError);
        }
        else {
            this.db.transaction(callback, onTxError);
        }
        return this.resolver.promise;
    };
    WebSqlTx.INDEX_MARK = '__d__';
    return WebSqlTx;
}(BaseTx));
var WebSqlRawBackStore = (function () {
    function WebSqlRawBackStore(global, version, db) {
        this.global = global;
        this.version = version;
        this.db = db;
    }
    WebSqlRawBackStore.queueListTables = function (tx) {
        var GET_TABLE_NAMES = 'SELECT tbl_name FROM sqlite_master WHERE type="table"';
        tx.queue(GET_TABLE_NAMES, [], function (results) {
            var rows = results['rows'];
            var tableNames = new Array(rows.length);
            for (var i = 0; i < tableNames.length; ++i) {
                tableNames[i] = rows.item(i)['tbl_name'];
            }
            return tableNames;
        });
    };
    WebSqlRawBackStore.prototype.getRawDBInstance = function () {
        return this.db;
    };
    WebSqlRawBackStore.prototype.getRawTransaction = function () {
        throw new Exception(ErrorCode.NO_WEBSQL_TX);
    };
    WebSqlRawBackStore.prototype.dropTable = function (tableName) {
        var tx = this.createTx();
        tx.queue("DROP TABLE ".concat(tableName), []);
        return tx.commit();
    };
    WebSqlRawBackStore.prototype.addTableColumn = function (tableName, columnName, defaultValue) {
        var value = IndexedDBRawBackStore.convert(defaultValue);
        return this.transformColumn(tableName, function (row) {
            row.value[columnName] = value;
            return row;
        });
    };
    WebSqlRawBackStore.prototype.dropTableColumn = function (tableName, columnName) {
        return this.transformColumn(tableName, function (row) {
            delete row.value[columnName];
            return row;
        });
    };
    WebSqlRawBackStore.prototype.renameTableColumn = function (tableName, oldColumnName, newColumnName) {
        return this.transformColumn(tableName, function (row) {
            row.value[newColumnName] = row.value[oldColumnName];
            delete row.value[oldColumnName];
            return row;
        });
    };
    WebSqlRawBackStore.prototype.createRow = function (payload) {
        var data = {};
        Object.keys(payload).forEach(function (key) {
            data[key] = IndexedDBRawBackStore.convert(payload[key]);
        });
        return Row.create(data);
    };
    WebSqlRawBackStore.prototype.getVersion = function () {
        return this.version;
    };
    WebSqlRawBackStore.prototype.dump = function () {
        var _this = this;
        var resolver = new Resolver();
        var tx = this.createTx();
        WebSqlRawBackStore.queueListTables(tx);
        var ret = {};
        tx.commit().then(function (res) {
            var results = res;
            var tables = results[0].filter(function (name) {
                return name !== '__lf_ver' && name !== '__WebKitDatabaseInfoTable__';
            });
            var promises = tables.map(function (tableName) {
                return _this.dumpTable(tableName).then(function (rows) { return (ret[tableName] = rows); });
            }, _this);
            Promise.all(promises).then(function () { return resolver.resolve(ret); });
        });
        return resolver.promise;
    };
    WebSqlRawBackStore.prototype.createTx = function () {
        return new WebSqlTx(this.db, TransactionType.READ_WRITE, new Journal(this.global, new Set()));
    };
    WebSqlRawBackStore.prototype.dumpTable = function (tableName) {
        var tx = this.createTx();
        tx.queue("SELECT id, value FROM ".concat(tableName), []);
        return tx.commit().then(function (res) {
            var results = res;
            var length = results[0].rows.length;
            var rows = new Array(length);
            for (var i = 0; i < length; ++i) {
                rows[i] = {
                    id: results[0].rows.item(i)['id'],
                    value: JSON.parse(results[0].rows.item(i)['value']),
                };
            }
            return Promise.resolve(rows);
        });
    };
    WebSqlRawBackStore.prototype.transformColumn = function (tableName, transformer) {
        var tx = this.createTx();
        var sql = "UPDATE ".concat(tableName, " SET value=? WHERE id=?");
        return this.dumpTable(tableName).then(function (rows) {
            rows.forEach(function (row) {
                var newRow = transformer(row);
                tx.queue(sql, [JSON.stringify(newRow.value), newRow.id]);
            });
            return tx.commit();
        });
    };
    return WebSqlRawBackStore;
}());
var window = this || window;
var WebSql = (function () {
    function WebSql(global, schema, size) {
        this.global = global;
        this.schema = schema;
        this.size = size || 1;
    }
    WebSql.escape = function (tableName) {
        return "\"".concat(tableName, "\"");
    };
    WebSql.prototype.init = function (upgrade) {
        var _this = this;
        if (!window.openDatabase) {
            throw new Exception(ErrorCode.WEBSQL_NOT_PROVIDED);
        }
        var defaultUpgrade = function (rawDb) { return Promise.resolve(); };
        var onUpgrade = upgrade || defaultUpgrade;
        return new Promise(function (resolve, reject) {
            var db = window.openDatabase(_this.schema.name(), '', _this.schema.name(), _this.size);
            if (db) {
                _this.db = db;
                _this.checkVersion(onUpgrade).then(function () {
                    _this.scanRowId().then(resolve, reject);
                }, function (e) {
                    if (e instanceof Exception) {
                        throw e;
                    }
                    throw new Exception(ErrorCode.CANT_OPEN_WEBSQL_DB, e.message);
                });
            }
            else {
                throw new Exception(ErrorCode.CANT_OPEN_WEBSQL_DB);
            }
        });
    };
    WebSql.prototype.initialized = function () {
        return this.db !== undefined && this.db !== null;
    };
    WebSql.prototype.createTx = function (type, scope, journal) {
        if (this.db) {
            return new WebSqlTx(this.db, type, journal);
        }
        throw new Exception(ErrorCode.CONNECTION_CLOSED);
    };
    WebSql.prototype.close = function () {
    };
    WebSql.prototype.getTableInternal = function (tableName) {
        throw new Exception(ErrorCode.CANT_GET_WEBSQL_TABLE);
    };
    WebSql.prototype.subscribe = function (handler) {
        this.notSupported();
    };
    WebSql.prototype.unsubscribe = function (handler) {
        this.notSupported();
    };
    WebSql.prototype.notify = function (changes) {
        this.notSupported();
    };
    WebSql.prototype.supportsImport = function () {
        return true;
    };
    WebSql.prototype.getEmptyJournal = function () {
        return new Journal(this.global, new Set());
    };
    WebSql.prototype.checkVersion = function (onUpgrade) {
        var _this = this;
        var CREATE_VERSION = 'CREATE TABLE IF NOT EXISTS __lf_ver(' +
            'id INTEGER PRIMARY KEY, v INTEGER)';
        var GET_VERSION = 'SELECT v FROM __lf_ver WHERE id = 0';
        var resolver = new Resolver();
        var tx = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        tx.queue(CREATE_VERSION, []);
        tx.queue(GET_VERSION, []);
        tx.commit().then(function (res) {
            var results = res;
            var version = 0;
            if (results[1].rows.length) {
                version = results[1].rows.item(0)['v'];
            }
            if (version < _this.schema.version()) {
                _this.onUpgrade(onUpgrade, version).then(resolver.resolve.bind(resolver));
            }
            else if (version > _this.schema.version()) {
                resolver.reject(new Exception(ErrorCode.INCOMPATIBLE_DB));
            }
            else {
                resolver.resolve();
            }
        }, resolver.reject.bind(resolver));
        return resolver.promise;
    };
    WebSql.prototype.notSupported = function () {
        throw new Exception(ErrorCode.NO_CHANGE_NOTIFICATION);
    };
    WebSql.prototype.onUpgrade = function (upgrade, oldVersion) {
        var _this = this;
        return this.preUpgrade().then(function () {
            var rawDb = new WebSqlRawBackStore(_this.global, oldVersion, _this.db);
            return upgrade(rawDb);
        });
    };
    WebSql.prototype.preUpgrade = function () {
        var tables = this.schema.tables();
        var tx = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        var tx2 = new WebSqlTx(this.db, TransactionType.READ_WRITE, this.getEmptyJournal());
        tx.queue('INSERT OR REPLACE INTO __lf_ver VALUES (0, ?)', [
            this.schema.version(),
        ]);
        WebSqlRawBackStore.queueListTables(tx);
        return tx.commit().then(function (res) {
            var results = res;
            var existingTables = results[1];
            existingTables
                .filter(function (name) { return name.indexOf(WebSqlTx.INDEX_MARK) !== -1; })
                .forEach(function (name) { return tx2.queue('DROP TABLE ' + WebSql.escape(name), []); });
            var newTables = [];
            var persistentIndices = [];
            var rowIdIndices = [];
            tables.map(function (table) {
                if (existingTables.indexOf(table.getName()) === -1) {
                    newTables.push(table.getName());
                }
                if (table.persistentIndex()) {
                    table.getIndices().forEach(function (index) {
                        var idxTableName = WebSqlTx.escapeTableName(index.getNormalizedName());
                        newTables.push(idxTableName);
                        persistentIndices.push(idxTableName);
                    });
                    var rowIdTableName = WebSqlTx.escapeTableName(table.getRowIdIndexName());
                    newTables.push(rowIdTableName);
                    rowIdIndices.push(rowIdTableName);
                }
            });
            newTables.forEach(function (name) {
                tx2.queue("CREATE TABLE ".concat(WebSql.escape(name)) +
                    '(id INTEGER PRIMARY KEY, value TEXT)', []);
            });
            return tx2.commit();
        });
    };
    WebSql.prototype.scanRowId = function () {
        var _this = this;
        var maxRowId = 0;
        var resolver = new Resolver();
        var selectIdFromTable = function (tableName) {
            var tx = new WebSqlTx(_this.db, TransactionType.READ_ONLY);
            tx.queue("SELECT MAX(id) FROM ".concat(WebSql.escape(tableName)), []);
            return tx.commit().then(function (res) {
                var results = res;
                var id = results[0].rows.item(0)['MAX(id)'];
                maxRowId = Math.max(id, maxRowId);
            });
        };
        var promises = this.schema
            .tables()
            .map(function (table) { return selectIdFromTable(table.getName()); });
        Promise.all(promises).then(function () {
            Row.setNextIdIfGreater(maxRowId + 1);
            resolver.resolve();
        }, function (e) {
            resolver.reject(e);
        });
        return resolver.promise;
    };
    return WebSql;
}());
var Inspector = (function () {
    function Inspector() {
    }
    Inspector.inspect = function (dbName, tableName, limit, skip) {
        if (dbName === null) {
            return Inspector.listDb();
        }
        if (tableName === null) {
            return Inspector.listTables(dbName);
        }
        return Inspector.inspectTable(dbName, tableName, limit, skip);
    };
    Inspector.toString = function (data) {
        var value = '';
        try {
            value = JSON.stringify(data);
        }
        catch (e) {
        }
        return value;
    };
    Inspector.getGlobal = function (dbName) {
        var global = Global.get();
        var ns = new ServiceId("ns_".concat(dbName));
        return global.isRegistered(ns) ? global.getService(ns) : null;
    };
    Inspector.listDb = function () {
        var global = Global.get();
        var dbList = {};
        global.listServices().forEach(function (service) {
            if (service.substring(0, 3) === 'ns_') {
                var dbName = service.substring(3);
                dbList[dbName] = Inspector.getGlobal(dbName)
                    .getService(Service.SCHEMA)
                    .version();
            }
        });
        return Inspector.toString(dbList);
    };
    Inspector.listTables = function (dbName) {
        var global = Inspector.getGlobal(dbName);
        var tables = {};
        if (global !== undefined && global !== null) {
            var indexStore_1 = global.getService(Service.INDEX_STORE);
            global
                .getService(Service.SCHEMA)
                .tables()
                .forEach(function (t) {
                var table = t;
                tables[table.getName()] = indexStore_1.get(table.getRowIdIndexName()).stats().totalRows;
            });
        }
        return Inspector.toString(tables);
    };
    Inspector.inspectTable = function (dbName, tableName, limit, skip) {
        var global = Inspector.getGlobal(dbName);
        var contents = [];
        if (global !== undefined && global !== null) {
            var table = null;
            try {
                table = global.getService(Service.SCHEMA).table(tableName);
            }
            catch (e) {
            }
            if (table !== undefined && table !== null) {
                var indexStore = global.getService(Service.INDEX_STORE);
                var cache = global.getService(Service.CACHE);
                var rowIds = indexStore.get(table.getRowIdIndexName()).getRange(undefined, false, limit, skip);
                if (rowIds.length) {
                    contents = cache.getMany(rowIds).map(function (row) { return row.payload(); });
                }
            }
        }
        return Inspector.toString(contents);
    };
    return Inspector;
}());
var DefaultCache = (function () {
    function DefaultCache(dbSchema) {
        var _this = this;
        this.map = new Map();
        this.tableRows = new Map();
        dbSchema.tables().forEach(function (table) {
            _this.tableRows.set(table.getName(), new Set());
        }, this);
    }
    DefaultCache.prototype.set = function (tableName, row) {
        this.map.set(row.id(), row);
        this.getTableRowSet(tableName).add(row.id());
    };
    DefaultCache.prototype.setMany = function (tableName, rows) {
        var _this = this;
        var tableSet = this.getTableRowSet(tableName);
        rows.forEach(function (row) {
            _this.map.set(row.id(), row);
            tableSet.add(row.id());
        }, this);
    };
    DefaultCache.prototype.get = function (id) {
        return this.map.get(id) || null;
    };
    DefaultCache.prototype.getMany = function (ids) {
        var _this = this;
        return ids.map(function (id) { return _this.get(id); });
    };
    DefaultCache.prototype.getRange = function (tableName, fromId, toId) {
        var _this = this;
        var data = [];
        var min = Math.min(fromId, toId);
        var max = Math.max(fromId, toId);
        var tableSet = this.getTableRowSet(tableName);
        if (tableSet.size < max - min) {
            tableSet.forEach(function (key) {
                if (key >= min && key <= max) {
                    var value = _this.map.get(key);
                    assert(value !== null && value !== undefined, 'Inconsistent cache 1');
                    data.push(value);
                }
            }, this);
        }
        else {
            for (var i = min; i <= max; ++i) {
                if (!tableSet.has(i)) {
                    continue;
                }
                var value = this.map.get(i);
                assert(value !== null && value !== undefined, 'Inconsistent cache 2');
                data.push(value);
            }
        }
        return data;
    };
    DefaultCache.prototype.remove = function (tableName, id) {
        this.map.delete(id);
        this.getTableRowSet(tableName).delete(id);
    };
    DefaultCache.prototype.removeMany = function (tableName, ids) {
        var _this = this;
        var tableSet = this.getTableRowSet(tableName);
        ids.forEach(function (id) {
            _this.map.delete(id);
            tableSet.delete(id);
        }, this);
    };
    DefaultCache.prototype.getCount = function (tableName) {
        return tableName ? this.getTableRowSet(tableName).size : this.map.size;
    };
    DefaultCache.prototype.clear = function () {
        this.map.clear();
        this.tableRows.clear();
    };
    DefaultCache.prototype.getTableRowSet = function (tableName) {
        var ret = this.tableRows.get(tableName);
        return ret;
    };
    return DefaultCache;
}());
var IndexHelper = (function () {
    function IndexHelper() {
    }
    IndexHelper.hashCode = function (value) {
        var hash = 0;
        for (var i = 0; i < value.length; ++i) {
            hash = (hash << 5) - hash + value.charCodeAt(i);
            hash = hash & hash;
        }
        return hash;
    };
    IndexHelper.hashArray = function (values) {
        var keys = values.map(function (value) {
            return value !== undefined && value !== null
                ? IndexHelper.hashCode(value.toString()).toString(32)
                : '';
        });
        return keys.join('_');
    };
    IndexHelper.slice = function (rawArray, reverseOrder, limit, skip) {
        var array = reverseOrder ? rawArray.reverse() : rawArray;
        if ((limit === undefined || limit === null) &&
            (skip === undefined || skip === null)) {
            return array;
        }
        var actualLimit = Math.min(limit !== undefined ? limit : array.length, array.length);
        if (actualLimit === 0) {
            return [];
        }
        var actualSkip = Math.min(skip || 0, array.length);
        return array.slice(actualSkip, actualSkip + actualLimit);
    };
    return IndexHelper;
}());
var BTree = (function () {
    function BTree(name, comparatorObj, uniqueKeyOnly, data) {
        this.name = name;
        this.comparatorObj = comparatorObj;
        this.uniqueKeyOnly = uniqueKeyOnly;
        this.root = undefined;
        this.statsObj = new IndexStats();
        if (data) {
            this.root = BTreeNode.fromData(this, data);
        }
        else {
            this.clear();
        }
    }
    BTree.deserialize = function (comparator, name, uniqueKeyOnly, rows) {
        var tree = new BTree(name, comparator, uniqueKeyOnly);
        var newRoot = BTreeNode.deserialize(rows, tree);
        tree.root = newRoot;
        return tree;
    };
    BTree.prototype.getName = function () {
        return this.name;
    };
    BTree.prototype.toString = function () {
        return this.root.toString();
    };
    BTree.prototype.add = function (key, value) {
        this.root = this.root.insert(key, value);
    };
    BTree.prototype.set = function (key, value) {
        this.root = this.root.insert(key, value, true);
    };
    BTree.prototype.remove = function (key, rowId) {
        this.root = this.root.remove(key, rowId);
    };
    BTree.prototype.get = function (key) {
        return this.root.get(key);
    };
    BTree.prototype.cost = function (keyRange) {
        if (keyRange === undefined || keyRange === null) {
            return this.stats().totalRows;
        }
        if (keyRange instanceof SingleKeyRange) {
            if (keyRange.isAll()) {
                return this.stats().totalRows;
            }
            if (keyRange.isOnly()) {
                return this.get(keyRange.from).length;
            }
        }
        return this.getRange([keyRange]).length;
    };
    BTree.prototype.stats = function () {
        return this.statsObj;
    };
    BTree.prototype.getRange = function (keyRanges, reverseOrder, rawLimit, rawSkip) {
        var _this = this;
        var leftMostKey = this.root.getLeftMostNode().keys[0];
        if (leftMostKey === undefined || rawLimit === 0) {
            return BTree.EMPTY;
        }
        var reverse = reverseOrder || false;
        var limit = rawLimit !== undefined && rawLimit !== null
            ? Math.min(rawLimit, this.stats().totalRows)
            : this.stats().totalRows;
        var skip = rawSkip || 0;
        var maxCount = Math.min(Math.max(this.stats().totalRows - skip, 0), limit);
        if (maxCount === 0) {
            return BTree.EMPTY;
        }
        if (keyRanges === undefined ||
            (keyRanges.length === 1 &&
                keyRanges[0] instanceof SingleKeyRange &&
                keyRanges[0].isAll())) {
            return this.getAll(maxCount, reverse, limit, skip);
        }
        var sortedKeyRanges = this.comparator().sortKeyRanges(keyRanges);
        var results = new Array(reverse ? this.stats().totalRows : maxCount);
        var params = {
            count: 0,
            limit: results.length,
            reverse: reverse,
            skip: skip,
        };
        var useFilter = this.comparator().keyDimensions() > 1;
        sortedKeyRanges.forEach(function (range) {
            var keys = _this.comparator().rangeToKeys(range);
            var key = _this.comparator().isLeftOpen(range) ? leftMostKey : keys[0];
            var start = _this.root.getContainingLeaf(key);
            var strikeCount = 0;
            while (start !== undefined &&
                start !== null &&
                params.count < params.limit) {
                if (useFilter) {
                    start.getRangeWithFilter(range, params, results);
                }
                else {
                    start.getRange(range, params, results);
                }
                if (params.skip === 0 &&
                    !start.isFirstKeyInRange(range)) {
                    strikeCount++;
                }
                else {
                    strikeCount = 0;
                }
                start = strikeCount === 2 ? null : start.next;
            }
        }, this);
        if (results.length > params.count) {
            results.splice(params.count, results.length - params.count);
        }
        return reverse ? IndexHelper.slice(results, reverse, limit, skip) : results;
    };
    BTree.prototype.clear = function () {
        this.root = BTreeNode.create(this);
        this.stats().clear();
    };
    BTree.prototype.containsKey = function (key) {
        return this.root.containsKey(key);
    };
    BTree.prototype.min = function () {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    };
    BTree.prototype.max = function () {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    };
    BTree.prototype.isUniqueKey = function () {
        return this.uniqueKeyOnly;
    };
    BTree.prototype.comparator = function () {
        return this.comparatorObj;
    };
    BTree.prototype.eq = function (lhs, rhs) {
        if (lhs !== undefined && lhs !== null) {
            return this.comparator().compare(lhs, rhs) === Favor.TIE;
        }
        return false;
    };
    BTree.prototype.serialize = function () {
        return BTreeNode.serialize(this.root.getLeftMostNode());
    };
    BTree.prototype.getAll = function (maxCount, reverse, limit, skip) {
        var off = reverse ? this.stats().totalRows - maxCount - skip : skip;
        var results = new Array(maxCount);
        var params = {
            count: maxCount,
            offset: off,
            startIndex: 0,
        };
        this.root.fill(params, results);
        return reverse ? results.reverse() : results;
    };
    BTree.prototype.checkNullKey = function (node, index) {
        if (!this.comparator().comparable(node.keys[index])) {
            if (Array.isArray(node.keys[index])) {
                if (node.keys[index][0] === null) {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return [
            node.keys[index],
            this.uniqueKeyOnly ? [node.values[index]] : node.values[index],
        ];
    };
    BTree.prototype.findLeftMost = function () {
        var node = this.root.getLeftMostNode();
        var index = 0;
        do {
            if (index >= node.keys.length) {
                node = node.next;
                index = 0;
                continue;
            }
            var results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index++;
        } while (node !== null);
        return null;
    };
    BTree.prototype.findRightMost = function () {
        var node = this.root.getRightMostNode();
        var index = node.keys.length - 1;
        do {
            if (index < 0) {
                node = node.prev;
                index = 0;
                continue;
            }
            var results = this.checkNullKey(node, index);
            if (results !== null) {
                return results;
            }
            index--;
        } while (node !== null);
        return null;
    };
    BTree.prototype.minMax = function (compareFn) {
        var leftMost = this.findLeftMost();
        var rightMost = this.findRightMost();
        if (leftMost === null || rightMost === null) {
            return null;
        }
        return compareFn(leftMost[0], rightMost[0]) === Favor.LHS
            ? leftMost
            : rightMost;
    };
    BTree.EMPTY = [];
    return BTree;
}());
var BTreeNode = (function () {
    function BTreeNode(id, tree) {
        this.id = id;
        this.tree = tree;
        this.height = 0;
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.keys = [];
        this.values = [];
        this.children = [];
        this.getContainingLeaf =
            tree.comparator().keyDimensions() === 1
                ? this.getContainingLeafSingleKey
                : this.getContainingLeafMultiKey;
    }
    BTreeNode.create = function (tree) {
        return new BTreeNode(Row.getNextId(), tree);
    };
    BTreeNode.serialize = function (start) {
        var rows = [];
        var node = start;
        while (node) {
            var payload = {
                k: node.keys,
                v: node.values,
            };
            rows.push(new Row(node.id, payload));
            node = node.next;
        }
        return rows;
    };
    BTreeNode.deserialize = function (rows, tree) {
        var stats = tree.stats();
        var leaves = rows.map(function (row) {
            var node = new BTreeNode(row.id(), tree);
            node.keys = row.payload()['k'];
            node.values = row.payload()['v'];
            node.keys.forEach(function (key, index) {
                stats.add(key, tree.isUniqueKey() ? 1 : node.values[index].length);
            });
            return node;
        });
        for (var i = 0; i < leaves.length - 1; ++i) {
            BTreeNode.associate(leaves[i], leaves[i + 1]);
        }
        return leaves.length > 1 ? BTreeNode.createInternals(leaves[0]) : leaves[0];
    };
    BTreeNode.fromData = function (tree, data) {
        var max = BTreeNode.MAX_KEY_LEN;
        max = max * max * max;
        if (data.length >= max) {
            throw new Exception(ErrorCode.TOO_MANY_ROWS, max.toString());
        }
        var node = BTreeNode.createLeaves(tree, data);
        node = BTreeNode.createInternals(node);
        return node;
    };
    BTreeNode.dumpLevel = function (node) {
        var key = "".concat(node.id, "[").concat(node.keys.join('|'), "]");
        var children = node.children.map(function (n) { return n.id; }).join('|');
        var values = node.values.join('/');
        var getNodeId = function (n) {
            return n !== null && n !== undefined ? n.id.toString() : '_';
        };
        var contents = getNodeId(node.prev) + '{';
        contents += node.isLeaf() ? values : children;
        contents = contents + '}' + getNodeId(node.parent);
        if (node.next) {
            var next = BTreeNode.dumpLevel(node.next);
            key = key + '  ' + next[0];
            contents = contents + '  ' + next[1];
        }
        return [key, contents];
    };
    BTreeNode.associate = function (left, right) {
        if (right) {
            right.prev = left;
        }
        if (left) {
            left.next = right;
        }
    };
    BTreeNode.calcNodeLen = function (remaining) {
        var maxLen = BTreeNode.MAX_KEY_LEN;
        var minLen = BTreeNode.MIN_KEY_LEN + 1;
        return remaining >= maxLen + minLen
            ? maxLen
            : remaining >= minLen && remaining <= maxLen
                ? remaining
                : minLen;
    };
    BTreeNode.createLeaves = function (tree, data) {
        var remaining = data.length;
        var dataIndex = 0;
        var curNode = BTreeNode.create(tree);
        var node = curNode;
        while (remaining > 0) {
            var nodeLen = BTreeNode.calcNodeLen(remaining);
            var target = data.slice(dataIndex, dataIndex + nodeLen);
            curNode.keys = target.map(function (e) { return e.key; });
            curNode.values = target.map(function (e) { return e.value; });
            dataIndex += nodeLen;
            remaining -= nodeLen;
            if (remaining > 0) {
                var newNode = BTreeNode.create(curNode.tree);
                BTreeNode.associate(curNode, newNode);
                curNode = newNode;
            }
        }
        return node;
    };
    BTreeNode.createParent = function (nodes) {
        var node = nodes[0];
        var root = BTreeNode.create(node.tree);
        root.height = node.height + 1;
        root.children = nodes;
        nodes.forEach(function (n, i) {
            n.parent = root;
            if (i > 0) {
                root.keys.push(n.keys[0]);
            }
        });
        return root;
    };
    BTreeNode.createInternals = function (node) {
        var curNode = node;
        var data = [];
        do {
            data.push(curNode);
            curNode = curNode.next;
        } while (curNode);
        var root;
        if (data.length <= BTreeNode.MAX_KEY_LEN + 1) {
            root = BTreeNode.createParent(data);
        }
        else {
            var remaining = data.length;
            var dataIndex = 0;
            root = BTreeNode.create(node.tree);
            root.height = node.height + 2;
            while (remaining > 0) {
                var nodeLen = BTreeNode.calcNodeLen(remaining);
                var target = data.slice(dataIndex, dataIndex + nodeLen);
                var newNode = BTreeNode.createParent(target);
                newNode.parent = root;
                if (root.children.length) {
                    root.keys.push(target[0].keys[0]);
                    BTreeNode.associate(root.children[root.children.length - 1], newNode);
                }
                root.children.push(newNode);
                dataIndex += nodeLen;
                remaining -= nodeLen;
            }
        }
        return root;
    };
    BTreeNode.leftMostKey = function (node) {
        return node.isLeaf()
            ? node.keys[0]
            : BTreeNode.leftMostKey(node.children[0]);
    };
    BTreeNode.prototype.toString = function () {
        var result = '';
        var level = BTreeNode.dumpLevel(this);
        result += level[0] + '\n' + level[1] + '\n';
        if (this.children.length) {
            result += this.children[0].toString();
        }
        return result;
    };
    BTreeNode.prototype.getLeftMostNode = function () {
        return this.isLeaf() ? this : this.children[0].getLeftMostNode();
    };
    BTreeNode.prototype.getRightMostNode = function () {
        return this.isLeaf()
            ? this
            : this.children[this.children.length - 1].getRightMostNode();
    };
    BTreeNode.prototype.get = function (key) {
        var pos = this.searchKey(key);
        if (this.isLeaf()) {
            var results = BTree.EMPTY;
            if (this.tree.eq(this.keys[pos], key)) {
                results = results.concat(this.values[pos]);
            }
            return results;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            return this.children[pos].get(key);
        }
    };
    BTreeNode.prototype.containsKey = function (key) {
        var pos = this.searchKey(key);
        if (this.tree.eq(this.keys[pos], key)) {
            return true;
        }
        return this.isLeaf() ? false : this.children[pos].containsKey(key);
    };
    BTreeNode.prototype.remove = function (key, value) {
        this.delete(key, -1, value);
        if (this.isRoot()) {
            var root = this;
            if (this.children.length === 1) {
                root = this.children[0];
                root.parent = null;
            }
            return root;
        }
        return this;
    };
    BTreeNode.prototype.insert = function (key, value, replace) {
        if (replace === void 0) { replace = false; }
        var pos = this.searchKey(key);
        if (this.isLeaf()) {
            if (this.tree.eq(this.keys[pos], key)) {
                if (replace) {
                    this.tree
                        .stats()
                        .remove(key, this.tree.isUniqueKey()
                        ? 1
                        : this.values[pos].length);
                    this.values[pos] = this.tree.isUniqueKey() ? value : [value];
                }
                else if (this.tree.isUniqueKey()) {
                    throw new Exception(ErrorCode.DUPLICATE_KEYS, this.tree.getName(), JSON.stringify(key));
                }
                else {
                    if (!ArrayHelper.binaryInsert(this.values[pos], value)) {
                        throw new Exception(ErrorCode.ROW_ID_EXISTED);
                    }
                }
                this.tree.stats().add(key, 1);
                return this;
            }
            this.keys.splice(pos, 0, key);
            this.values.splice(pos, 0, this.tree.isUniqueKey() ? value : [value]);
            this.tree.stats().add(key, 1);
            return this.keys.length === BTreeNode.MAX_COUNT ? this.splitLeaf() : this;
        }
        else {
            pos = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            var node = this.children[pos].insert(key, value, replace);
            if (!node.isLeaf() && node.keys.length === 1) {
                this.keys.splice(pos, 0, node.keys[0]);
                node.children[1].parent = this;
                node.children[0].parent = this;
                this.children.splice(pos, 1, node.children[1]);
                this.children.splice(pos, 0, node.children[0]);
            }
            return this.keys.length === BTreeNode.MAX_COUNT
                ? this.splitInternal()
                : this;
        }
    };
    BTreeNode.prototype.getRange = function (keyRange, params, results) {
        var c = this.tree.comparator();
        var left = 0;
        var right = this.keys.length - 1;
        var compare = function (coverage) {
            return coverage[0] ? (coverage[1] ? Favor.TIE : Favor.LHS) : Favor.RHS;
        };
        var keys = this.keys;
        var favorLeft = compare(c.compareRange(keys[left], keyRange));
        var favorRight = compare(c.compareRange(keys[right], keyRange));
        if (favorLeft === Favor.LHS ||
            (favorLeft === Favor.RHS && favorRight === Favor.RHS)) {
            return;
        }
        var getMidPoint = function (l, r) {
            var mid = (l + r) >> 1;
            return mid === l ? mid + 1 : mid;
        };
        var findFirstKey = function (l, r, favorR) {
            if (l >= r) {
                return favorR === Favor.TIE ? r : -1;
            }
            var favorL = compare(c.compareRange(keys[l], keyRange));
            if (favorL === Favor.TIE) {
                return l;
            }
            else if (favorL === Favor.LHS) {
                return -1;
            }
            var mid = getMidPoint(l, r);
            if (mid === r) {
                return favorR === Favor.TIE ? r : -1;
            }
            var favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findFirstKey(l, mid, favorM);
            }
            else if (favorM === Favor.RHS) {
                return findFirstKey(mid + 1, r, favorR);
            }
            else {
                return findFirstKey(l + 1, mid, favorM);
            }
        };
        var findLastKey = function (l, r) {
            if (l >= r) {
                return l;
            }
            var favorR = compare(c.compareRange(keys[r], keyRange));
            if (favorR === Favor.TIE) {
                return r;
            }
            else if (favorR === Favor.RHS) {
                return l;
            }
            var mid = getMidPoint(l, r);
            if (mid === r) {
                return l;
            }
            var favorM = compare(c.compareRange(keys[mid], keyRange));
            if (favorM === Favor.TIE) {
                return findLastKey(mid, r);
            }
            else if (favorM === Favor.LHS) {
                return findLastKey(l, mid - 1);
            }
            else {
                return -1;
            }
        };
        if (favorLeft !== Favor.TIE) {
            left = findFirstKey(left + 1, right, favorRight);
        }
        if (left !== -1) {
            right = findLastKey(left, right);
            if (right !== -1 && right >= left) {
                this.appendResults(params, results, left, right + 1);
            }
        }
    };
    BTreeNode.prototype.getRangeWithFilter = function (keyRange, params, results) {
        var c = this.tree.comparator();
        var start = -1;
        for (var i = 0; i < this.keys.length; ++i) {
            if (c.isInRange(this.keys[i], keyRange)) {
                start = i;
                break;
            }
        }
        if (start === -1) {
            return;
        }
        for (var i = start; i < this.keys.length && params.count < params.limit; ++i) {
            if (!c.isInRange(this.keys[i], keyRange)) {
                continue;
            }
            this.appendResultsAt(params, results, i);
        }
    };
    BTreeNode.prototype.fill = function (params, results) {
        if (this.isLeaf()) {
            for (var i = 0; i < this.values.length && params.count > 0; ++i) {
                var val = this.values[i];
                if (params.offset > 0) {
                    params.offset -= !this.tree.isUniqueKey() ? val.length : 1;
                    if (params.offset < 0) {
                        for (var j = val.length + params.offset; j < val.length && params.count > 0; ++j) {
                            results[params.startIndex++] = val[j];
                            params.count--;
                        }
                    }
                    continue;
                }
                if (this.tree.isUniqueKey()) {
                    results[params.startIndex++] = this.values[i];
                    params.count--;
                }
                else {
                    for (var j = 0; j < val.length && params.count > 0; ++j) {
                        results[params.startIndex++] = val[j];
                        params.count--;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < this.children.length && params.count > 0; ++i) {
                this.children[i].fill(params, results);
            }
        }
    };
    BTreeNode.prototype.isFirstKeyInRange = function (range) {
        return this.tree.comparator().isFirstKeyInRange(this.keys[0], range);
    };
    BTreeNode.prototype.isLeaf = function () {
        return this.height === 0;
    };
    BTreeNode.prototype.isRoot = function () {
        return this.parent === null;
    };
    BTreeNode.prototype.fix = function () {
        this.keys = [];
        for (var i = 1; i < this.children.length; ++i) {
            this.keys.push(BTreeNode.leftMostKey(this.children[i]));
        }
    };
    BTreeNode.prototype.delete = function (key, parentPos, value) {
        var pos = this.searchKey(key);
        var isLeaf = this.isLeaf();
        if (!isLeaf) {
            var index = this.tree.eq(this.keys[pos], key) ? pos + 1 : pos;
            if (this.children[index].delete(key, index, value)) {
                this.fix();
            }
            else {
                return false;
            }
        }
        else if (!this.tree.eq(this.keys[pos], key)) {
            return false;
        }
        if (this.keys.length > pos && this.tree.eq(this.keys[pos], key)) {
            if (value !== undefined && !this.tree.isUniqueKey() && isLeaf) {
                if (ArrayHelper.binaryRemove(this.values[pos], value)) {
                    this.tree.stats().remove(key, 1);
                }
                var len = this.values[pos].length;
                if (len) {
                    return false;
                }
            }
            this.keys.splice(pos, 1);
            if (isLeaf) {
                var removedLength = this.tree.isUniqueKey()
                    ? 1
                    : this.values[pos].length;
                this.values.splice(pos, 1);
                this.tree.stats().remove(key, removedLength);
            }
        }
        if (this.keys.length < BTreeNode.MIN_KEY_LEN && !this.isRoot()) {
            if (!this.steal()) {
                this.merge(parentPos);
            }
            return true;
        }
        return true;
    };
    BTreeNode.prototype.steal = function () {
        var from = null;
        var fromIndex;
        var fromChildIndex;
        var toIndex;
        if (this.next && this.next.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.next;
            fromIndex = 0;
            fromChildIndex = 0;
            toIndex = this.keys.length + 1;
        }
        else if (this.prev && this.prev.keys.length > BTreeNode.MIN_KEY_LEN) {
            from = this.prev;
            fromIndex = this.prev.keys.length - 1;
            fromChildIndex = this.isLeaf() ? fromIndex : fromIndex + 1;
            toIndex = 0;
        }
        else {
            return false;
        }
        this.keys.splice(toIndex, 0, from.keys[fromIndex]);
        from.keys.splice(fromIndex, 1);
        var child = this.isLeaf() ? this.values : this.children;
        var fromChild = null;
        if (this.isLeaf()) {
            fromChild = from.values;
        }
        else {
            fromChild = from.children;
            fromChild[fromChildIndex].parent = this;
        }
        child.splice(toIndex, 0, fromChild[fromChildIndex]);
        fromChild.splice(fromChildIndex, 1);
        if (!from.isLeaf()) {
            from.fix();
            this.fix();
        }
        return true;
    };
    BTreeNode.prototype.merge = function (parentPos) {
        var _a, _b, _c;
        var mergeTo;
        var keyOffset;
        var childOffset;
        if (this.next && this.next.keys.length < BTreeNode.MAX_KEY_LEN) {
            mergeTo = this.next;
            keyOffset = 0;
            childOffset = 0;
        }
        else if (this.prev) {
            mergeTo = this.prev;
            keyOffset = mergeTo.keys.length;
            childOffset = mergeTo.isLeaf()
                ? mergeTo.values.length
                : mergeTo.children.length;
        }
        else {
            throw new Exception(ErrorCode.ASSERTION);
        }
        (_a = mergeTo.keys).splice.apply(_a, __spreadArray([keyOffset, 0], this.keys, false));
        var myChildren = null;
        if (this.isLeaf()) {
            myChildren = this.values;
        }
        else {
            myChildren = this.children;
            myChildren.forEach(function (node) { return (node.parent = mergeTo); });
        }
        if (mergeTo.isLeaf()) {
            (_b = mergeTo.values).splice.apply(_b, __spreadArray([childOffset, 0], myChildren, false));
        }
        else {
            (_c = mergeTo.children).splice.apply(_c, __spreadArray([childOffset, 0], myChildren, false));
        }
        BTreeNode.associate(this.prev, this.next);
        if (!mergeTo.isLeaf()) {
            mergeTo.fix();
        }
        if (parentPos !== -1) {
            this.parent.keys.splice(parentPos, 1);
            this.parent.children.splice(parentPos, 1);
        }
    };
    BTreeNode.prototype.splitLeaf = function () {
        var half = BTreeNode.MIN_KEY_LEN;
        var right = BTreeNode.create(this.tree);
        var root = BTreeNode.create(this.tree);
        root.height = 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        root.parent = this.parent;
        this.parent = root;
        right.keys = this.keys.splice(half);
        right.values = this.values.splice(half);
        right.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    };
    BTreeNode.prototype.splitInternal = function () {
        var half = BTreeNode.MIN_KEY_LEN;
        var root = BTreeNode.create(this.tree);
        var right = BTreeNode.create(this.tree);
        root.parent = this.parent;
        root.height = this.height + 1;
        root.keys = [this.keys[half]];
        root.children = [this, right];
        this.keys.splice(half, 1);
        right.parent = root;
        right.height = this.height;
        right.keys = this.keys.splice(half);
        right.children = this.children.splice(half + 1);
        right.children.forEach(function (node) { return (node.parent = right); });
        this.parent = root;
        BTreeNode.associate(right, this.next);
        BTreeNode.associate(this, right);
        return root;
    };
    BTreeNode.prototype.searchKey = function (key) {
        var left = 0;
        var right = this.keys.length;
        var c = this.tree.comparator();
        while (left < right) {
            var middle = (left + right) >> 1;
            if (c.compare(this.keys[middle], key) === Favor.RHS) {
                left = middle + 1;
            }
            else {
                right = middle;
            }
        }
        return left;
    };
    BTreeNode.prototype.getContainingLeafSingleKey = function (key) {
        if (!this.isLeaf()) {
            var pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                pos++;
            }
            return this.children[pos].getContainingLeaf(key);
        }
        return this;
    };
    BTreeNode.prototype.getContainingLeafMultiKey = function (key) {
        if (!this.isLeaf()) {
            var pos = this.searchKey(key);
            if (this.tree.eq(this.keys[pos], key)) {
                var hasUnbound = key.some(function (dimension) { return dimension === SingleKeyRange.UNBOUND_VALUE; });
                if (!hasUnbound) {
                    pos++;
                }
            }
            return this.children[pos].getContainingLeafMultiKey(key);
        }
        return this;
    };
    BTreeNode.prototype.appendResultsAt = function (params, results, i) {
        if (this.tree.isUniqueKey()) {
            if (!params.reverse && params.skip) {
                params.skip--;
                return;
            }
            results[params.count++] = this.values[i];
        }
        else {
            var val = this.values[i];
            for (var j = 0; j < val.length && params.count < results.length; ++j) {
                if (!params.reverse && params.skip) {
                    params.skip--;
                    continue;
                }
                results[params.count++] = val[j];
            }
        }
    };
    BTreeNode.prototype.appendResults = function (params, results, from, to) {
        for (var i = from; i < to; ++i) {
            if (!params.reverse && params.count >= params.limit) {
                return;
            }
            this.appendResultsAt(params, results, i);
        }
    };
    BTreeNode.MAX_COUNT = 512;
    BTreeNode.MAX_KEY_LEN = BTreeNode.MAX_COUNT - 1;
    BTreeNode.MIN_KEY_LEN = BTreeNode.MAX_COUNT >> 1;
    return BTreeNode;
}());
var SimpleComparator = (function () {
    function SimpleComparator(order) {
        this.compareFn =
            order === Order.DESC
                ? SimpleComparator.compareDescending
                : SimpleComparator.compareAscending;
        this.normalizeKeyRange =
            order === Order.DESC
                ? function (keyRange) {
                    return keyRange !== undefined && keyRange !== null
                        ? keyRange.reverse()
                        : null;
                }
                : function (keyRange) { return keyRange || null; };
        this.orderRange =
            order === Order.DESC
                ? SimpleComparator.orderRangeDescending
                : SimpleComparator.orderRangeAscending;
    }
    SimpleComparator.compareAscending = function (lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs < rhs ? Favor.RHS : Favor.TIE;
    };
    SimpleComparator.compareDescending = function (lhs, rhs) {
        return SimpleComparator.compareAscending(rhs, lhs);
    };
    SimpleComparator.orderRangeAscending = function (lhs, rhs) {
        return SingleKeyRange.compare(lhs, rhs);
    };
    SimpleComparator.orderRangeDescending = function (lhs, rhs) {
        return SingleKeyRange.compare(rhs, lhs);
    };
    SimpleComparator.prototype.compareRange = function (key, naturalRange) {
        var LEFT = 0;
        var RIGHT = 1;
        var range = this.normalizeKeyRange(naturalRange);
        var results = [
            SingleKeyRange.isUnbound(range.from),
            SingleKeyRange.isUnbound(range.to),
        ];
        if (!results[LEFT]) {
            var favor = this.compareFn(key, range.from);
            results[LEFT] = range.excludeLower
                ? favor === Favor.LHS
                : favor !== Favor.RHS;
        }
        if (!results[RIGHT]) {
            var favor = this.compareFn(key, range.to);
            results[RIGHT] = range.excludeUpper
                ? favor === Favor.RHS
                : favor !== Favor.LHS;
        }
        return results;
    };
    SimpleComparator.prototype.compare = function (lhs, rhs) {
        return this.compareFn(lhs, rhs);
    };
    SimpleComparator.prototype.min = function (lhs, rhs) {
        return lhs < rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    };
    SimpleComparator.prototype.max = function (lhs, rhs) {
        return lhs > rhs ? Favor.LHS : lhs === rhs ? Favor.TIE : Favor.RHS;
    };
    SimpleComparator.prototype.isInRange = function (key, range) {
        var results = this.compareRange(key, range);
        return results[0] && results[1];
    };
    SimpleComparator.prototype.isFirstKeyInRange = function (key, range) {
        return this.isInRange(key, range);
    };
    SimpleComparator.prototype.getAllRange = function () {
        return SingleKeyRange.all();
    };
    SimpleComparator.prototype.orderKeyRange = function (lhs, rhs) {
        return this.orderRange(lhs, rhs);
    };
    SimpleComparator.prototype.sortKeyRanges = function (keyRanges) {
        var _this = this;
        return keyRanges
            .filter(function (range) { return range !== null; })
            .sort(function (lhs, rhs) { return _this.orderKeyRange(lhs, rhs); });
    };
    SimpleComparator.prototype.isLeftOpen = function (range) {
        return SingleKeyRange.isUnbound(this.normalizeKeyRange(range).from);
    };
    SimpleComparator.prototype.rangeToKeys = function (naturalRange) {
        var range = this.normalizeKeyRange(naturalRange);
        return [range.from, range.to];
    };
    SimpleComparator.prototype.comparable = function (key) {
        return key !== null;
    };
    SimpleComparator.prototype.keyDimensions = function () {
        return 1;
    };
    SimpleComparator.prototype.toString = function () {
        return this.compare === SimpleComparator.compareDescending
            ? 'SimpleComparator_DESC'
            : 'SimpleComparator_ASC';
    };
    return SimpleComparator;
}());
var MultiKeyComparator = (function () {
    function MultiKeyComparator(orders) {
        this.comparators = orders.map(function (order) { return new SimpleComparator(order); });
    }
    MultiKeyComparator.createOrders = function (numKeys, order) {
        var orders = new Array(numKeys);
        for (var i = 0; i < numKeys; ++i) {
            orders[i] = order;
        }
        return orders;
    };
    MultiKeyComparator.prototype.compare = function (lk, rk) {
        var lhs = lk;
        var rhs = rk;
        return this.forEach(lhs, rhs, function (c, l, r) {
            return l === SingleKeyRange.UNBOUND_VALUE ||
                r === SingleKeyRange.UNBOUND_VALUE
                ? Favor.TIE
                : c.compare(l, r);
        });
    };
    MultiKeyComparator.prototype.min = function (lk, rk) {
        var lhs = lk;
        var rhs = rk;
        return this.forEach(lhs, rhs, function (c, l, r) { return c.min(l, r); });
    };
    MultiKeyComparator.prototype.max = function (lk, rk) {
        var lhs = lk;
        var rhs = rk;
        return this.forEach(lhs, rhs, function (c, l, r) { return c.max(l, r); });
    };
    MultiKeyComparator.prototype.compareRange = function (k, range) {
        var key = k;
        var results = [true, true];
        for (var i = 0; i < this.comparators.length && (results[0] || results[1]); ++i) {
            var dimensionResults = this.comparators[i].compareRange(key[i], range[i]);
            results[0] = results[0] && dimensionResults[0];
            results[1] = results[1] && dimensionResults[1];
        }
        return results;
    };
    MultiKeyComparator.prototype.isInRange = function (k, range) {
        var key = k;
        var isInRange = true;
        for (var i = 0; i < this.comparators.length && isInRange; ++i) {
            isInRange = this.comparators[i].isInRange(key[i], range[i]);
        }
        return isInRange;
    };
    MultiKeyComparator.prototype.isFirstKeyInRange = function (k, range) {
        var key = k;
        return this.comparators[0].isInRange(key[0], range[0]);
    };
    MultiKeyComparator.prototype.getAllRange = function () {
        return this.comparators.map(function (c) { return c.getAllRange(); });
    };
    MultiKeyComparator.prototype.sortKeyRanges = function (keyRanges) {
        var _this = this;
        var outputKeyRanges = keyRanges.filter(function (range) {
            return range.every(function (r) { return r !== undefined && r !== null; });
        });
        var keysPerDimensions = new Array(this.comparators.length);
        var _loop_2 = function (i) {
            keysPerDimensions[i] = outputKeyRanges.map(function (range) { return range[i]; });
        };
        for (var i = 0; i < keysPerDimensions.length; i++) {
            _loop_2(i);
        }
        keysPerDimensions.forEach(function (keys, i) {
            keys.sort(function (lhs, rhs) {
                return _this.comparators[i].orderKeyRange(lhs, rhs);
            });
        }, this);
        var finalKeyRanges = new Array(outputKeyRanges.length);
        var _loop_3 = function (i) {
            finalKeyRanges[i] = keysPerDimensions.map(function (keys) { return keys[i]; });
        };
        for (var i = 0; i < finalKeyRanges.length; i++) {
            _loop_3(i);
        }
        return finalKeyRanges.sort(function (lhs, rhs) {
            var favor = Favor.TIE;
            for (var i = 0; i < _this.comparators.length && favor === Favor.TIE; ++i) {
                favor = _this.comparators[i].orderKeyRange(lhs[i], rhs[i]);
            }
            return favor;
        });
    };
    MultiKeyComparator.prototype.isLeftOpen = function (range) {
        return this.comparators[0].isLeftOpen(range[0]);
    };
    MultiKeyComparator.prototype.rangeToKeys = function (keyRange) {
        var _this = this;
        var startKey = keyRange.map(function (range, i) { return _this.comparators[i].rangeToKeys(range)[0]; });
        var endKey = keyRange.map(function (range, i) { return _this.comparators[i].rangeToKeys(range)[1]; });
        return [startKey, endKey];
    };
    MultiKeyComparator.prototype.comparable = function (key) {
        var _this = this;
        return key.every(function (keyDimension, i) {
            return _this.comparators[i].comparable(keyDimension);
        });
    };
    MultiKeyComparator.prototype.keyDimensions = function () {
        return this.comparators.length;
    };
    MultiKeyComparator.prototype.forEach = function (lhs, rhs, fn) {
        var favor = Favor.TIE;
        for (var i = 0; i < this.comparators.length && favor === Favor.TIE; ++i) {
            favor = fn(this.comparators[i], lhs[i], rhs[i]);
        }
        return favor;
    };
    return MultiKeyComparator;
}());
var SimpleComparatorWithNull = (function (_super) {
    __extends(SimpleComparatorWithNull, _super);
    function SimpleComparatorWithNull(order) {
        var _this = _super.call(this, order) || this;
        _this.compareFn =
            order === Order.DESC
                ? SimpleComparatorWithNull.compareDescending
                : SimpleComparatorWithNull.compareAscending;
        return _this;
    }
    SimpleComparatorWithNull.compareAscending = function (lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null
            ? Favor.LHS
            : SimpleComparator.compareAscending(lhs, rhs);
    };
    SimpleComparatorWithNull.compareDescending = function (lhs, rhs) {
        return SimpleComparatorWithNull.compareAscending(rhs, lhs);
    };
    SimpleComparatorWithNull.prototype.isInRange = function (key, range) {
        return key === null ? range.isAll() : _super.prototype.isInRange.call(this, key, range);
    };
    SimpleComparatorWithNull.prototype.min = function (lhs, rhs) {
        var results = this.minMax(lhs, rhs);
        return results === null ? _super.prototype.min.call(this, lhs, rhs) : results;
    };
    SimpleComparatorWithNull.prototype.max = function (lhs, rhs) {
        var results = this.minMax(lhs, rhs);
        return results === null ? _super.prototype.max.call(this, lhs, rhs) : results;
    };
    SimpleComparatorWithNull.prototype.minMax = function (lhs, rhs) {
        if (lhs === null) {
            return rhs === null ? Favor.TIE : Favor.RHS;
        }
        return rhs === null ? Favor.LHS : null;
    };
    return SimpleComparatorWithNull;
}(SimpleComparator));
var MultiKeyComparatorWithNull = (function (_super) {
    __extends(MultiKeyComparatorWithNull, _super);
    function MultiKeyComparatorWithNull(orders) {
        var _this = _super.call(this, orders) || this;
        _this.comparators = orders.map(function (order) {
            return new SimpleComparatorWithNull(order);
        });
        return _this;
    }
    return MultiKeyComparatorWithNull;
}(MultiKeyComparator));
var ComparatorFactory = (function () {
    function ComparatorFactory() {
    }
    ComparatorFactory.create = function (indexSchema) {
        if (indexSchema.columns.length === 1) {
            return new SimpleComparator(indexSchema.columns[0].order);
        }
        var orders = indexSchema.columns.map(function (col) { return col.order; });
        var nullable = indexSchema.columns.some(function (col) { return col.schema.isNullable(); });
        return nullable
            ? new MultiKeyComparatorWithNull(orders)
            : new MultiKeyComparator(orders);
    };
    return ComparatorFactory;
}());
var NullableIndex = (function () {
    function NullableIndex(index) {
        this.index = index;
        this.nulls = new Set();
        this.statsNull = new IndexStats();
        this.statsObj = new IndexStats();
    }
    NullableIndex.deserialize = function (deserializeFn, rows) {
        var index = -1;
        for (var i = 0; i < rows.length; ++i) {
            if (rows[i].id() === NullableIndex.NULL_ROW_ID) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            throw new Exception(ErrorCode.DATA_CORRUPTION);
        }
        var nulls = rows[index].payload()['v'];
        var newRows = rows.slice(0);
        newRows.splice(index, 1);
        var tree = deserializeFn(newRows);
        var nullableIndex = new NullableIndex(tree);
        nulls.forEach(function (rowId) { return nullableIndex.nulls.add(rowId); });
        return nullableIndex;
    };
    NullableIndex.prototype.getName = function () {
        return this.index.getName();
    };
    NullableIndex.prototype.add = function (key, value) {
        if (key === null) {
            this.nulls.add(value);
            this.statsNull.add(key, 1);
        }
        else {
            this.index.add(key, value);
        }
    };
    NullableIndex.prototype.set = function (key, value) {
        if (key === null) {
            this.nulls.clear();
            this.statsNull.clear();
            this.add(key, value);
        }
        else {
            this.index.set(key, value);
        }
    };
    NullableIndex.prototype.remove = function (key, rowId) {
        if (key === null) {
            if (rowId) {
                this.nulls.delete(rowId);
                this.statsNull.remove(key, 1);
            }
            else {
                this.nulls.clear();
                this.statsNull.clear();
            }
        }
        else {
            this.index.remove(key, rowId);
        }
    };
    NullableIndex.prototype.get = function (key) {
        if (key === null) {
            return Array.from(this.nulls.values());
        }
        else {
            return this.index.get(key);
        }
    };
    NullableIndex.prototype.min = function () {
        return this.index.min();
    };
    NullableIndex.prototype.max = function () {
        return this.index.max();
    };
    NullableIndex.prototype.cost = function (keyRange) {
        return this.index.cost(keyRange);
    };
    NullableIndex.prototype.getRange = function (range, reverseOrder, limit, skip) {
        var results = this.index.getRange(range, reverseOrder, limit, skip);
        if (range !== undefined && range !== null) {
            return results;
        }
        return results.concat(Array.from(this.nulls.values()));
    };
    NullableIndex.prototype.clear = function () {
        this.nulls.clear();
        this.index.clear();
    };
    NullableIndex.prototype.containsKey = function (key) {
        return key === null ? this.nulls.size !== 0 : this.index.containsKey(key);
    };
    NullableIndex.prototype.serialize = function () {
        var rows = [
            new Row(NullableIndex.NULL_ROW_ID, {
                v: Array.from(this.nulls.values()),
            }),
        ];
        return rows.concat(this.index.serialize());
    };
    NullableIndex.prototype.comparator = function () {
        return this.index.comparator();
    };
    NullableIndex.prototype.isUniqueKey = function () {
        return this.index.isUniqueKey();
    };
    NullableIndex.prototype.stats = function () {
        this.statsObj.updateFromList([this.index.stats(), this.statsNull]);
        return this.statsObj;
    };
    NullableIndex.NULL_ROW_ID = -2;
    return NullableIndex;
}());
var RowId = (function () {
    function RowId(name) {
        this.name = name;
        this.rows = new Set();
        this.comparatorObj = new SimpleComparator(Order.ASC);
    }
    RowId.deserialize = function (name, rows) {
        var index = new RowId(name);
        var rowIds = rows[0].payload()['v'];
        rowIds.forEach(function (rowId) { return index.add(rowId, rowId); });
        return index;
    };
    RowId.prototype.getName = function () {
        return this.name;
    };
    RowId.prototype.add = function (key, value) {
        if (typeof key !== 'number') {
            throw new Exception(ErrorCode.INVALID_ROW_ID);
        }
        this.rows.add(key);
    };
    RowId.prototype.set = function (key, value) {
        this.add(key, value);
    };
    RowId.prototype.remove = function (key, rowId) {
        this.rows.delete(key);
    };
    RowId.prototype.get = function (key) {
        return this.containsKey(key) ? [key] : RowId.EMPTY_ARRAY;
    };
    RowId.prototype.min = function () {
        return this.minMax(this.comparatorObj.min.bind(this.comparatorObj));
    };
    RowId.prototype.max = function () {
        return this.minMax(this.comparatorObj.max.bind(this.comparatorObj));
    };
    RowId.prototype.cost = function (keyRange) {
        return this.rows.size;
    };
    RowId.prototype.getRange = function (range, reverseOrder, limit, skip) {
        var _this = this;
        var keyRanges = range || [
            SingleKeyRange.all(),
        ];
        var values = Array.from(this.rows.values()).filter(function (value) {
            return keyRanges.some(function (r) { return _this.comparatorObj.isInRange(value, r); });
        }, this);
        return IndexHelper.slice(values, reverseOrder, limit, skip);
    };
    RowId.prototype.clear = function () {
        this.rows.clear();
    };
    RowId.prototype.containsKey = function (key) {
        return this.rows.has(key);
    };
    RowId.prototype.serialize = function () {
        return [new Row(RowId.ROW_ID, { v: Array.from(this.rows.values()) })];
    };
    RowId.prototype.comparator = function () {
        return this.comparatorObj;
    };
    RowId.prototype.isUniqueKey = function () {
        return true;
    };
    RowId.prototype.stats = function () {
        var stats = new IndexStats();
        stats.totalRows = this.rows.size;
        return stats;
    };
    RowId.prototype.minMax = function (compareFn) {
        if (this.rows.size === 0) {
            return null;
        }
        var keys = Array.from(this.rows.values()).reduce(function (keySoFar, key) {
            return keySoFar === null || compareFn(key, keySoFar) === Favor.LHS
                ? key
                : keySoFar;
        });
        return [keys, [keys]];
    };
    RowId.ROW_ID = 0;
    RowId.EMPTY_ARRAY = [];
    return RowId;
}());
var Prefetcher = (function () {
    function Prefetcher(global) {
        this.backStore = global.getService(Service.BACK_STORE);
        this.indexStore = global.getService(Service.INDEX_STORE);
        this.cache = global.getService(Service.CACHE);
    }
    Prefetcher.prototype.init = function (schema) {
        var _this = this;
        var tables = schema.tables();
        var execSequentially = function () {
            if (tables.length === 0) {
                return Promise.resolve();
            }
            var table = tables.shift();
            var whenTableFetched = table.persistentIndex()
                ? _this.fetchTableWithPersistentIndices(table)
                : _this.fetchTable(table);
            return whenTableFetched.then(execSequentially);
        };
        return execSequentially();
    };
    Prefetcher.prototype.fetchTable = function (table) {
        var _this = this;
        var tx = this.backStore.createTx(TransactionType.READ_ONLY, [table]);
        var store = tx.getTable(table.getName(), table.deserializeRow.bind(table), TableType.DATA);
        var promise = store.get([]).then(function (results) {
            _this.cache.setMany(table.getName(), results);
            _this.reconstructNonPersistentIndices(table, results);
        });
        tx.commit();
        return promise;
    };
    Prefetcher.prototype.reconstructNonPersistentIndices = function (tableSchema, tableRows) {
        var indices = this.indexStore.getTableIndices(tableSchema.getName());
        tableRows.forEach(function (row) {
            indices.forEach(function (index) {
                var key = row.keyOfIndex(index.getName());
                index.add(key, row.id());
            });
        });
    };
    Prefetcher.prototype.fetchTableWithPersistentIndices = function (tableSchema) {
        var _this = this;
        var tx = this.backStore.createTx(TransactionType.READ_ONLY, [
            tableSchema,
        ]);
        var store = tx.getTable(tableSchema.getName(), tableSchema.deserializeRow, TableType.DATA);
        var whenTableContentsFetched = store.get([]).then(function (results) {
            _this.cache.setMany(tableSchema.getName(), results);
        });
        var whenIndicesReconstructed = tableSchema.getIndices()
            .map(function (indexSchema) {
            return _this.reconstructPersistentIndex(indexSchema, tx);
        })
            .concat(this.reconstructPersistentRowIdIndex(tableSchema, tx));
        tx.commit();
        return Promise.all(whenIndicesReconstructed.concat(whenTableContentsFetched)).then(function () {
            return;
        });
    };
    Prefetcher.prototype.reconstructPersistentIndex = function (indexSchema, tx) {
        var _this = this;
        var indexTable = tx.getTable(indexSchema.getNormalizedName(), Row.deserialize, TableType.INDEX);
        var comparator = ComparatorFactory.create(indexSchema);
        return indexTable.get([]).then(function (serializedRows) {
            if (serializedRows.length > 0) {
                if (indexSchema.hasNullableColumn()) {
                    var deserializeFn = BTree.deserialize.bind(undefined, comparator, indexSchema.getNormalizedName(), indexSchema.isUnique);
                    var nullableIndex = NullableIndex.deserialize(deserializeFn, serializedRows);
                    _this.indexStore.set(indexSchema.tableName, nullableIndex);
                }
                else {
                    var btreeIndex = BTree.deserialize(comparator, indexSchema.getNormalizedName(), indexSchema.isUnique, serializedRows);
                    _this.indexStore.set(indexSchema.tableName, btreeIndex);
                }
            }
        });
    };
    Prefetcher.prototype.reconstructPersistentRowIdIndex = function (tableSchema, tx) {
        var _this = this;
        var indexTable = tx.getTable(tableSchema.getRowIdIndexName(), Row.deserialize, TableType.INDEX);
        return indexTable.get([]).then(function (serializedRows) {
            if (serializedRows.length > 0) {
                var rowIdIndex = RowId.deserialize(tableSchema.getRowIdIndexName(), serializedRows);
                _this.indexStore.set(tableSchema.getName(), rowIdIndex);
            }
        });
    };
    return Prefetcher;
}());
var UnknownTable = (function () {
    function UnknownTable() {
        this._alias = null;
    }
    UnknownTable.prototype.getName = function () {
        return '#UnknownTable';
    };
    UnknownTable.prototype.getColumns = function () {
        return [];
    };
    UnknownTable.prototype.getIndices = function () {
        return [];
    };
    UnknownTable.prototype.persistentIndex = function () {
        return false;
    };
    UnknownTable.prototype.getAlias = function () {
        return this._alias;
    };
    UnknownTable.prototype.getEffectiveName = function () {
        return this._alias || this.getName();
    };
    UnknownTable.prototype.getRowIdIndexName = function () {
        return '#UnknownTable.#';
    };
    UnknownTable.prototype.createRow = function (value) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    };
    UnknownTable.prototype.deserializeRow = function (dbRecord) {
        throw new Exception(ErrorCode.NOT_SUPPORTED);
    };
    UnknownTable.prototype.getConstraint = function () {
        return null;
    };
    UnknownTable.prototype.as = function (alias) {
        this._alias = alias;
        return this;
    };
    UnknownTable.prototype.col = function (name) {
        return null;
    };
    return UnknownTable;
}());
var StarColumn = (function (_super) {
    __extends(StarColumn, _super);
    function StarColumn(alias) {
        var _this = _super.call(this) || this;
        _this.alias = alias || null;
        _this.table = new UnknownTable();
        return _this;
    }
    StarColumn.prototype.getName = function () {
        return '*';
    };
    StarColumn.prototype.getNormalizedName = function () {
        return this.getName();
    };
    StarColumn.prototype.toString = function () {
        return this.getNormalizedName();
    };
    StarColumn.prototype.getTable = function () {
        return this.table;
    };
    StarColumn.prototype.getType = function () {
        return Type.NUMBER;
    };
    StarColumn.prototype.getAlias = function () {
        return this.alias;
    };
    StarColumn.prototype.getIndices = function () {
        return [];
    };
    StarColumn.prototype.getIndex = function () {
        return null;
    };
    StarColumn.prototype.isNullable = function () {
        return false;
    };
    StarColumn.prototype.isUnique = function () {
        return false;
    };
    StarColumn.prototype.as = function (alias) {
        var clone = new StarColumn(alias);
        clone.table = this.table;
        return clone;
    };
    return StarColumn;
}(NonPredicateProvider));
var fn = (function () {
    function fn() {
    }
    fn.avg = function (col) {
        return new AggregatedColumn(col, FnType.AVG);
    };
    fn.count = function (column) {
        var col = column || new StarColumn();
        return new AggregatedColumn(col, FnType.COUNT);
    };
    fn.distinct = function (col) {
        return new AggregatedColumn(col, FnType.DISTINCT);
    };
    fn.max = function (col) {
        return new AggregatedColumn(col, FnType.MAX);
    };
    fn.min = function (col) {
        return new AggregatedColumn(col, FnType.MIN);
    };
    fn.stddev = function (col) {
        return new AggregatedColumn(col, FnType.STDDEV);
    };
    fn.sum = function (col) {
        return new AggregatedColumn(col, FnType.SUM);
    };
    fn.geomean = function (col) {
        return new AggregatedColumn(col, FnType.GEOMEAN);
    };
    return fn;
}());
exports.fn = fn;
var MemoryIndexStore = (function () {
    function MemoryIndexStore() {
        this.store = new Map();
        this.tableIndices = new Map();
    }
    MemoryIndexStore.prototype.init = function (schema) {
        var _this = this;
        var tables = schema.tables();
        tables.forEach(function (table) {
            var tableIndices = [];
            _this.tableIndices.set(table.getName(), tableIndices);
            var rowIdIndexName = table.getRowIdIndexName();
            var rowIdIndex = _this.get(rowIdIndexName);
            if (rowIdIndex === null) {
                var index = new RowId(rowIdIndexName);
                tableIndices.push(index);
                _this.store.set(rowIdIndexName, index);
            }
            table.getIndices().forEach(function (indexSchema) {
                var index = _this.createIndex(indexSchema);
                tableIndices.push(index);
                _this.store.set(indexSchema.getNormalizedName(), index);
            }, _this);
        }, this);
        return Promise.resolve();
    };
    MemoryIndexStore.prototype.get = function (name) {
        return this.store.get(name) || null;
    };
    MemoryIndexStore.prototype.set = function (tableName, index) {
        var tableIndices = this.tableIndices.get(tableName) || null;
        if (tableIndices === null) {
            tableIndices = [];
            this.tableIndices.set(tableName, tableIndices);
        }
        var existsAt = -1;
        for (var i = 0; i < tableIndices.length; i++) {
            if (tableIndices[i].getName() === index.getName()) {
                existsAt = i;
                break;
            }
        }
        if (existsAt >= 0 && tableIndices.length > 0) {
            tableIndices.splice(existsAt, 1, index);
        }
        else {
            tableIndices.push(index);
        }
        this.store.set(index.getName(), index);
    };
    MemoryIndexStore.prototype.getTableIndices = function (tableName) {
        return this.tableIndices.get(tableName) || [];
    };
    MemoryIndexStore.prototype.createIndex = function (indexSchema) {
        var comparator = ComparatorFactory.create(indexSchema);
        var index = new BTree(indexSchema.getNormalizedName(), comparator, indexSchema.isUnique);
        return indexSchema.hasNullableColumn() && indexSchema.columns.length === 1
            ? new NullableIndex(index)
            : index;
    };
    return MemoryIndexStore;
}());
function createPredicate(lhs, rhs, type) {
    if (rhs === null) {
        return new ValuePredicate(lhs, rhs, type);
    }
    var r = rhs;
    if (r.getIndex && r.getIndices) {
        return new JoinPredicate(lhs, r, type);
    }
    return new ValuePredicate(lhs, rhs, type);
}
var RewritePass = (function () {
    function RewritePass() {
    }
    return RewritePass;
}());
var LogicalQueryPlanNode = (function (_super) {
    __extends(LogicalQueryPlanNode, _super);
    function LogicalQueryPlanNode() {
        return _super.call(this) || this;
    }
    return LogicalQueryPlanNode;
}(TreeNode));
var SelectNode = (function (_super) {
    __extends(SelectNode, _super);
    function SelectNode(predicate) {
        var _this = _super.call(this) || this;
        _this.predicate = predicate;
        return _this;
    }
    SelectNode.prototype.toString = function () {
        return "select(".concat(this.predicate.toString(), ")");
    };
    return SelectNode;
}(LogicalQueryPlanNode));
var AndPredicatePass = (function (_super) {
    __extends(AndPredicatePass, _super);
    function AndPredicatePass() {
        return _super.call(this) || this;
    }
    AndPredicatePass.prototype.rewrite = function (rootNode, context) {
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    };
    AndPredicatePass.prototype.traverse = function (rootNode) {
        var _this = this;
        if (rootNode instanceof SelectNode) {
            assert(rootNode.getChildCount() === 1, 'SelectNode must have exactly one child.');
            var predicates = this.breakAndPredicate(rootNode.predicate);
            var newNodes = this.createSelectNodeChain(predicates);
            TreeHelper.replaceNodeWithChain(rootNode, newNodes[0], newNodes[1]);
            if (rootNode === this.rootNode) {
                this.rootNode = newNodes[0];
            }
            rootNode = newNodes[0];
        }
        rootNode.getChildren().forEach(function (child) { return _this.traverse(child); });
    };
    AndPredicatePass.prototype.breakAndPredicate = function (predicate) {
        var _this = this;
        if (predicate.getChildCount() === 0) {
            return [predicate];
        }
        var combinedPredicate = predicate;
        if (combinedPredicate.operator !== Operator.AND) {
            return [predicate];
        }
        var predicates = combinedPredicate
            .getChildren()
            .slice()
            .map(function (childPredicate) {
            combinedPredicate.removeChild(childPredicate);
            return _this.breakAndPredicate(childPredicate);
        });
        return ArrayHelper.flatten(predicates);
    };
    AndPredicatePass.prototype.createSelectNodeChain = function (predicates) {
        var parentNode = null;
        var lastNode = null;
        predicates.map(function (predicate, index) {
            var node = new SelectNode(predicate);
            if (index === 0) {
                parentNode = node;
            }
            else {
                lastNode.addChild(node);
            }
            lastNode = node;
        }, this);
        return [
            parentNode,
            lastNode,
        ];
    };
    return AndPredicatePass;
}(RewritePass));
var CrossProductNode = (function (_super) {
    __extends(CrossProductNode, _super);
    function CrossProductNode() {
        return _super.call(this) || this;
    }
    CrossProductNode.prototype.toString = function () {
        return 'cross_product';
    };
    return CrossProductNode;
}(LogicalQueryPlanNode));
var CrossProductPass = (function (_super) {
    __extends(CrossProductPass, _super);
    function CrossProductPass() {
        return _super.call(this) || this;
    }
    CrossProductPass.prototype.rewrite = function (rootNode, queryContext) {
        if (queryContext.from.length < 3) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode);
        return this.rootNode;
    };
    CrossProductPass.prototype.traverse = function (rootNode) {
        var _this = this;
        if (rootNode instanceof CrossProductNode) {
            while (rootNode.getChildCount() > 2) {
                var crossProduct = new CrossProductNode();
                for (var i = 0; i < 2; i++) {
                    var child = rootNode.removeChildAt(0);
                    crossProduct.addChild(child);
                }
                rootNode.addChildAt(crossProduct, 0);
            }
        }
        rootNode.getChildren().forEach(function (child) { return _this.traverse(child); });
    };
    return CrossProductPass;
}(RewritePass));
var BaseLogicalPlanGenerator = (function () {
    function BaseLogicalPlanGenerator(query) {
        this.query = query;
        this.rootNode = null;
    }
    BaseLogicalPlanGenerator.prototype.generate = function () {
        if (this.rootNode === null) {
            this.rootNode = this.generateInternal();
        }
        return this.rootNode;
    };
    return BaseLogicalPlanGenerator;
}());
var DeleteNode = (function (_super) {
    __extends(DeleteNode, _super);
    function DeleteNode(table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        return _this;
    }
    DeleteNode.prototype.toString = function () {
        return "delete(".concat(this.table.getName(), ")");
    };
    return DeleteNode;
}(LogicalQueryPlanNode));
var LogicalPlanRewriter = (function () {
    function LogicalPlanRewriter(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    LogicalPlanRewriter.prototype.generate = function () {
        var _this = this;
        this.rewritePasses.forEach(function (rewritePass) {
            _this.rootNode = rewritePass.rewrite(_this.rootNode, _this.queryContext);
        }, this);
        return this.rootNode;
    };
    return LogicalPlanRewriter;
}());
var TableAccessNode = (function (_super) {
    __extends(TableAccessNode, _super);
    function TableAccessNode(table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        return _this;
    }
    TableAccessNode.prototype.toString = function () {
        var table = this.table;
        var postfix = table.getAlias() ? " as ".concat(table.getAlias()) : '';
        return "table_access(".concat(this.table.getName()).concat(postfix, ")");
    };
    return TableAccessNode;
}(LogicalQueryPlanNode));
var DeleteLogicalPlanGenerator = (function (_super) {
    __extends(DeleteLogicalPlanGenerator, _super);
    function DeleteLogicalPlanGenerator(query, rewritePasses) {
        var _this = _super.call(this, query) || this;
        _this.rewritePasses = rewritePasses;
        return _this;
    }
    DeleteLogicalPlanGenerator.prototype.generateInternal = function () {
        var deleteNode = new DeleteNode(this.query.from);
        var selectNode = this.query.where
            ? new SelectNode(this.query.where.copy())
            : null;
        var tableAccessNode = new TableAccessNode(this.query.from);
        if (selectNode === null) {
            deleteNode.addChild(tableAccessNode);
        }
        else {
            selectNode.addChild(tableAccessNode);
            deleteNode.addChild(selectNode);
        }
        var planRewriter = new LogicalPlanRewriter(deleteNode, this.query, this.rewritePasses);
        return planRewriter.generate();
    };
    return DeleteLogicalPlanGenerator;
}(BaseLogicalPlanGenerator));
var JoinNode = (function (_super) {
    __extends(JoinNode, _super);
    function JoinNode(predicate, isOuterJoin) {
        var _this = _super.call(this) || this;
        _this.predicate = predicate;
        _this.isOuterJoin = isOuterJoin;
        return _this;
    }
    JoinNode.prototype.toString = function () {
        return ("join(type: ".concat(this.isOuterJoin ? 'outer' : 'inner', ", ") +
            "".concat(this.predicate.toString(), ")"));
    };
    return JoinNode;
}(LogicalQueryPlanNode));
var ImplicitJoinsPass = (function (_super) {
    __extends(ImplicitJoinsPass, _super);
    function ImplicitJoinsPass() {
        return _super.call(this) || this;
    }
    ImplicitJoinsPass.prototype.rewrite = function (rootNode, context) {
        var queryContext = context;
        if (queryContext.from.length < 2) {
            return rootNode;
        }
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        return this.rootNode;
    };
    ImplicitJoinsPass.prototype.traverse = function (rootNode, queryContext) {
        var _this = this;
        if (rootNode instanceof SelectNode &&
            rootNode.predicate instanceof JoinPredicate) {
            assert(rootNode.getChildCount() === 1, 'SelectNode must have exactly one child.');
            var predicateId = rootNode.predicate.getId();
            var child = rootNode.getChildAt(0);
            if (child instanceof CrossProductNode) {
                var isOuterJoin = queryContext.outerJoinPredicates &&
                    queryContext.outerJoinPredicates.has(predicateId);
                var joinNode = new JoinNode(rootNode.predicate, isOuterJoin);
                TreeHelper.replaceChainWithNode(rootNode, child, joinNode);
                if (rootNode === this.rootNode) {
                    this.rootNode = joinNode;
                }
                rootNode = joinNode;
            }
        }
        rootNode.getChildren().forEach(function (child) { return _this.traverse(child, queryContext); });
    };
    return ImplicitJoinsPass;
}(RewritePass));
var InsertNode = (function (_super) {
    __extends(InsertNode, _super);
    function InsertNode(table, values) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.values = values;
        return _this;
    }
    InsertNode.prototype.toString = function () {
        return "insert(".concat(this.table.getName(), ", R").concat(this.values.length, ")");
    };
    return InsertNode;
}(LogicalQueryPlanNode));
var InsertOrReplaceNode = (function (_super) {
    __extends(InsertOrReplaceNode, _super);
    function InsertOrReplaceNode(table, values) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.values = values;
        return _this;
    }
    InsertOrReplaceNode.prototype.toString = function () {
        return "insertOrReplace(".concat(this.table.getName(), ", R").concat(this.values.length, ")");
    };
    return InsertOrReplaceNode;
}(LogicalQueryPlanNode));
var InsertLogicalPlanGenerator = (function (_super) {
    __extends(InsertLogicalPlanGenerator, _super);
    function InsertLogicalPlanGenerator(query) {
        return _super.call(this, query) || this;
    }
    InsertLogicalPlanGenerator.prototype.generateInternal = function () {
        return this.query.allowReplace
            ? new InsertOrReplaceNode(this.query.into, this.query.values)
            : new InsertNode(this.query.into, this.query.values);
    };
    return InsertLogicalPlanGenerator;
}(BaseLogicalPlanGenerator));
var LogicalQueryPlan = (function () {
    function LogicalQueryPlan(rootNode, scope) {
        this.rootNode = rootNode;
        this.scope = scope;
    }
    LogicalQueryPlan.prototype.getRoot = function () {
        return this.rootNode;
    };
    LogicalQueryPlan.prototype.getScope = function () {
        return this.scope;
    };
    return LogicalQueryPlan;
}());
var PushDownSelectionsPass = (function (_super) {
    __extends(PushDownSelectionsPass, _super);
    function PushDownSelectionsPass() {
        var _this = _super.call(this) || this;
        _this.alreadyPushedDown = new Set();
        return _this;
    }
    PushDownSelectionsPass.prototype.rewrite = function (rootNode, context) {
        var queryContext = context;
        if (queryContext.where === undefined || queryContext.where === null) {
            return rootNode;
        }
        this.clear();
        this.rootNode = rootNode;
        this.traverse(this.rootNode, queryContext);
        this.clear();
        return this.rootNode;
    };
    PushDownSelectionsPass.prototype.clear = function () {
        this.alreadyPushedDown.clear();
    };
    PushDownSelectionsPass.prototype.traverse = function (rootNode, queryContext) {
        var _this = this;
        var processChildren = function (node) {
            node.getChildren().forEach(processNodeRec);
        };
        var processNodeRec = function (node) {
            if (_this.alreadyPushedDown.has(node)) {
                return;
            }
            if (!_this.isCandidateNode(node)) {
                processChildren(node);
                return;
            }
            var selectNode = node;
            var selectNodeTables = selectNode.predicate.getTables();
            var shouldPushDownFn = function (child) {
                return _this.doesReferToTables(child, selectNodeTables);
            };
            var newRoot = _this.pushDownNodeRec(queryContext, selectNode, shouldPushDownFn);
            _this.alreadyPushedDown.add(selectNode);
            if (newRoot !== selectNode) {
                if (newRoot.getParent() === null) {
                    _this.rootNode = newRoot;
                }
                processNodeRec(newRoot);
            }
            processChildren(selectNode);
        };
        processNodeRec(rootNode);
    };
    PushDownSelectionsPass.prototype.pushDownNodeRec = function (queryContext, node, shouldPushDownFn) {
        var _this = this;
        var newRoot = node;
        if (this.shouldSwapWithChild(queryContext, node)) {
            newRoot = TreeHelper.swapNodeWithChild(node);
            this.pushDownNodeRec(queryContext, node, shouldPushDownFn);
        }
        else if (this.shouldPushBelowChild(node)) {
            var newNodes_1 = [];
            var cloneFn = function (n) {
                var newNode = new SelectNode(n.predicate);
                newNodes_1.push(newNode);
                return newNode;
            };
            newRoot = TreeHelper.pushNodeBelowChild(node, shouldPushDownFn, cloneFn);
            newNodes_1.forEach(function (newNode) {
                return _this.pushDownNodeRec(queryContext, newNode, shouldPushDownFn);
            });
        }
        return newRoot;
    };
    PushDownSelectionsPass.prototype.doesReferToTables = function (root, tables) {
        var referredTables = new Set();
        TreeHelper.getLeafNodes(root).forEach(function (tableAccessNode) {
            return referredTables.add(tableAccessNode.table);
        });
        if (root instanceof TableAccessNode) {
            referredTables.add(root.table);
        }
        return isSubset(referredTables, tables);
    };
    PushDownSelectionsPass.prototype.isCandidateNode = function (node) {
        return node instanceof SelectNode;
    };
    PushDownSelectionsPass.prototype.shouldPushBelowChild = function (node) {
        var child = node.getChildAt(0);
        return child instanceof CrossProductNode || child instanceof JoinNode;
    };
    PushDownSelectionsPass.prototype.shouldSwapWithChild = function (queryContext, node) {
        var child = node.getChildAt(0);
        if (!(child instanceof SelectNode)) {
            return false;
        }
        if (queryContext.outerJoinPredicates === undefined ||
            queryContext.outerJoinPredicates === null) {
            return true;
        }
        var nodeIsJoin = node.predicate instanceof JoinPredicate;
        var childIsOuterJoin = queryContext.outerJoinPredicates.has(child.predicate.getId());
        return nodeIsJoin || !childIsOuterJoin;
    };
    return PushDownSelectionsPass;
}(RewritePass));
var AggregationNode = (function (_super) {
    __extends(AggregationNode, _super);
    function AggregationNode(columns) {
        var _this = _super.call(this) || this;
        _this.columns = columns;
        return _this;
    }
    AggregationNode.prototype.toString = function () {
        return "aggregation(".concat(this.columns.toString(), ")");
    };
    return AggregationNode;
}(LogicalQueryPlanNode));
var GroupByNode = (function (_super) {
    __extends(GroupByNode, _super);
    function GroupByNode(columns) {
        var _this = _super.call(this) || this;
        _this.columns = columns;
        return _this;
    }
    GroupByNode.prototype.toString = function () {
        return "group_by(".concat(this.columns.toString(), ")");
    };
    return GroupByNode;
}(LogicalQueryPlanNode));
var LimitNode = (function (_super) {
    __extends(LimitNode, _super);
    function LimitNode(limit) {
        var _this = _super.call(this) || this;
        _this.limit = limit;
        return _this;
    }
    LimitNode.prototype.toString = function () {
        return "limit(".concat(this.limit, ")");
    };
    return LimitNode;
}(LogicalQueryPlanNode));
var OrderByNode = (function (_super) {
    __extends(OrderByNode, _super);
    function OrderByNode(orderBy) {
        var _this = _super.call(this) || this;
        _this.orderBy = orderBy;
        return _this;
    }
    OrderByNode.prototype.toString = function () {
        return "order_by(".concat(SelectContext.orderByToString(this.orderBy), ")");
    };
    return OrderByNode;
}(LogicalQueryPlanNode));
var ProjectNode = (function (_super) {
    __extends(ProjectNode, _super);
    function ProjectNode(columns, groupByColumns) {
        var _this = _super.call(this) || this;
        _this.columns = columns;
        _this.groupByColumns = groupByColumns;
        return _this;
    }
    ProjectNode.prototype.toString = function () {
        var columns = this.groupByColumns
            ? this.groupByColumns.map(function (col) { return col.getNormalizedName(); }).join(', ')
            : '';
        var postfix = columns.length ? ", groupBy(".concat(columns, ")") : '';
        return "project(".concat(this.columns.toString()).concat(postfix, ")");
    };
    return ProjectNode;
}(LogicalQueryPlanNode));
var SkipNode = (function (_super) {
    __extends(SkipNode, _super);
    function SkipNode(skip) {
        var _this = _super.call(this) || this;
        _this.skip = skip;
        return _this;
    }
    SkipNode.prototype.toString = function () {
        return "skip(".concat(this.skip, ")");
    };
    return SkipNode;
}(LogicalQueryPlanNode));
var SelectLogicalPlanGenerator = (function (_super) {
    __extends(SelectLogicalPlanGenerator, _super);
    function SelectLogicalPlanGenerator(query, rewritePasses) {
        var _this = _super.call(this, query) || this;
        _this.rewritePasses = rewritePasses;
        _this.tableAccessNodes = null;
        _this.crossProductNode = null;
        _this.selectNode = null;
        _this.groupByNode = null;
        _this.aggregationNode = null;
        _this.orderByNode = null;
        _this.skipNode = null;
        _this.limitNode = null;
        _this.projectNode = null;
        return _this;
    }
    SelectLogicalPlanGenerator.prototype.generateInternal = function () {
        this.generateNodes();
        var rootNode = this.connectNodes();
        var planRewriter = new LogicalPlanRewriter(rootNode, this.query, this.rewritePasses);
        return planRewriter.generate();
    };
    SelectLogicalPlanGenerator.prototype.generateNodes = function () {
        this.generateTableAccessNodes();
        this.generateCrossProductNode();
        this.generateSelectNode();
        this.generateOrderByNode();
        this.generateSkipNode();
        this.generateLimitNode();
        this.generateGroupByNode();
        this.generateAggregationNode();
        this.generateProjectNode();
    };
    SelectLogicalPlanGenerator.prototype.connectNodes = function () {
        var parentOrder = [
            this.limitNode,
            this.skipNode,
            this.projectNode,
            this.orderByNode,
            this.aggregationNode,
            this.groupByNode,
            this.selectNode,
            this.crossProductNode,
        ];
        var lastExistingParentIndex = -1;
        var rootNode = null;
        for (var i = 0; i < parentOrder.length; i++) {
            var node = parentOrder[i];
            if (node !== null) {
                if (rootNode === null) {
                    rootNode = node;
                }
                else {
                    parentOrder[lastExistingParentIndex].addChild(node);
                }
                lastExistingParentIndex = i;
            }
        }
        this.tableAccessNodes.forEach(function (tableAccessNode) {
            parentOrder[lastExistingParentIndex].addChild(tableAccessNode);
        });
        return rootNode;
    };
    SelectLogicalPlanGenerator.prototype.generateTableAccessNodes = function () {
        this.tableAccessNodes = this.query.from.map(function (table) { return new TableAccessNode(table); });
    };
    SelectLogicalPlanGenerator.prototype.generateCrossProductNode = function () {
        if (this.query.from.length >= 2) {
            this.crossProductNode = new CrossProductNode();
        }
    };
    SelectLogicalPlanGenerator.prototype.generateSelectNode = function () {
        if (this.query.where) {
            this.selectNode = new SelectNode(this.query.where.copy());
        }
    };
    SelectLogicalPlanGenerator.prototype.generateOrderByNode = function () {
        if (this.query.orderBy) {
            this.orderByNode = new OrderByNode(this.query.orderBy);
        }
    };
    SelectLogicalPlanGenerator.prototype.generateSkipNode = function () {
        if ((this.query.skip && this.query.skip > 0) || this.query.skipBinder) {
            this.skipNode = new SkipNode(this.query.skip);
        }
    };
    SelectLogicalPlanGenerator.prototype.generateLimitNode = function () {
        if (this.query.limit !== undefined && this.query.limit !== null) {
            this.limitNode = new LimitNode(this.query.limit);
        }
    };
    SelectLogicalPlanGenerator.prototype.generateGroupByNode = function () {
        if (this.query.groupBy) {
            this.groupByNode = new GroupByNode(this.query.groupBy);
        }
    };
    SelectLogicalPlanGenerator.prototype.generateAggregationNode = function () {
        var aggregatedColumns = this.query.columns.filter(function (column) {
            return column instanceof AggregatedColumn;
        });
        if (this.query.orderBy) {
            this.query.orderBy.forEach(function (orderBy) {
                if (orderBy.column instanceof AggregatedColumn) {
                    aggregatedColumns.push(orderBy.column);
                }
            });
        }
        if (aggregatedColumns.length > 0) {
            this.aggregationNode = new AggregationNode(aggregatedColumns);
        }
    };
    SelectLogicalPlanGenerator.prototype.generateProjectNode = function () {
        this.projectNode = new ProjectNode(this.query.columns || [], this.query.groupBy || null);
    };
    return SelectLogicalPlanGenerator;
}(BaseLogicalPlanGenerator));
var UpdateNode = (function (_super) {
    __extends(UpdateNode, _super);
    function UpdateNode(table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        return _this;
    }
    UpdateNode.prototype.toString = function () {
        return "update(".concat(this.table.getName(), ")");
    };
    return UpdateNode;
}(LogicalQueryPlanNode));
var UpdateLogicalPlanGenerator = (function (_super) {
    __extends(UpdateLogicalPlanGenerator, _super);
    function UpdateLogicalPlanGenerator(query) {
        return _super.call(this, query) || this;
    }
    UpdateLogicalPlanGenerator.prototype.generateInternal = function () {
        var updateNode = new UpdateNode(this.query.table);
        var selectNode = this.query.where !== null
            ? new SelectNode(this.query.where.copy())
            : null;
        var tableAccessNode = new TableAccessNode(this.query.table);
        if (selectNode === null) {
            updateNode.addChild(tableAccessNode);
        }
        else {
            selectNode.addChild(tableAccessNode);
            updateNode.addChild(selectNode);
        }
        return updateNode;
    };
    return UpdateLogicalPlanGenerator;
}(BaseLogicalPlanGenerator));
var LogicalPlanFactory = (function () {
    function LogicalPlanFactory() {
        this.selectOptimizationPasses = [
            new AndPredicatePass(),
            new CrossProductPass(),
            new PushDownSelectionsPass(),
            new ImplicitJoinsPass(),
        ];
        this.deleteOptimizationPasses = [new AndPredicatePass()];
    }
    LogicalPlanFactory.prototype.create = function (query) {
        var generator = null;
        if (query instanceof InsertContext) {
            generator = new InsertLogicalPlanGenerator(query);
        }
        else if (query instanceof DeleteContext) {
            generator = new DeleteLogicalPlanGenerator(query, this.deleteOptimizationPasses);
        }
        else if (query instanceof SelectContext) {
            generator = new SelectLogicalPlanGenerator(query, this.selectOptimizationPasses);
        }
        else if (query instanceof UpdateContext) {
            generator = new UpdateLogicalPlanGenerator(query);
        }
        else {
            throw new Exception(ErrorCode.UNKNOWN_QUERY_CONTEXT);
        }
        var rootNode = generator.generate();
        return new LogicalQueryPlan(rootNode, query.getScope());
    };
    return LogicalPlanFactory;
}());
var AggregationCalculator = (function () {
    function AggregationCalculator(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    AggregationCalculator.prototype.calculate = function () {
        var _this = this;
        this.columns.forEach(function (column) {
            var reverseColumnChain = column.getColumnChain().reverse();
            for (var i = 1; i < reverseColumnChain.length; i++) {
                var currentColumn = reverseColumnChain[i];
                var leafColumn = currentColumn.getColumnChain().slice(-1)[0];
                var inputRelation = _this.getInputRelationFor(currentColumn);
                if (inputRelation.hasAggregationResult(currentColumn)) {
                    return;
                }
                var result = _this.evalAggregation(currentColumn.aggregatorType, inputRelation, leafColumn);
                _this.relation.setAggregationResult(currentColumn, result);
            }
        }, this);
    };
    AggregationCalculator.prototype.getInputRelationFor = function (column) {
        return column.child instanceof AggregatedColumn
            ? this.relation.getAggregationResult(column.child)
            : this.relation;
    };
    AggregationCalculator.prototype.evalAggregation = function (aggregatorType, relation, column) {
        var result = null;
        switch (aggregatorType) {
            case FnType.MIN:
                result = this.reduce(relation, column, function (s, v) {
                    var soFar = s;
                    var value = v;
                    return value < soFar ? value : soFar;
                });
                break;
            case FnType.MAX:
                result = this.reduce(relation, column, function (s, v) {
                    var soFar = s;
                    var value = v;
                    return value > soFar ? value : soFar;
                });
                break;
            case FnType.DISTINCT:
                result = this.distinct(relation, column);
                break;
            case FnType.COUNT:
                result = this.count(relation, column);
                break;
            case FnType.SUM:
                result = this.sum(relation, column);
                break;
            case FnType.AVG: {
                var count = this.count(relation, column);
                if (count > 0) {
                    result = this.sum(relation, column) / count;
                }
                break;
            }
            case FnType.GEOMEAN:
                result = this.geomean(relation, column);
                break;
            default:
                result = this.stddev(relation, column);
                break;
        }
        return result;
    };
    AggregationCalculator.prototype.reduce = function (relation, column, reduceFn) {
        return relation.entries.reduce(function (soFar, entry) {
            var value = entry.getField(column);
            if (value === null) {
                return soFar;
            }
            return soFar === null ? value : reduceFn(soFar, value);
        }, null);
    };
    AggregationCalculator.prototype.count = function (relation, column) {
        if (column instanceof StarColumn) {
            return relation.entries.length;
        }
        return relation.entries.reduce(function (soFar, entry) {
            return soFar + (entry.getField(column) === null ? 0 : 1);
        }, 0);
    };
    AggregationCalculator.prototype.sum = function (relation, column) {
        return this.reduce(relation, column, function (s, v) {
            var soFar = s;
            var value = v;
            return value + soFar;
        });
    };
    AggregationCalculator.prototype.stddev = function (relation, column) {
        var values = [];
        relation.entries.forEach(function (entry) {
            var value = entry.getField(column);
            if (value !== null) {
                values.push(value);
            }
        });
        return values.length === 0
            ? null
            : MathHelper.standardDeviation.apply(null, values);
    };
    AggregationCalculator.prototype.geomean = function (relation, column) {
        var nonZeroEntriesCount = 0;
        var reduced = relation.entries.reduce(function (soFar, entry) {
            var value = entry.getField(column);
            if (value !== null && value !== 0) {
                nonZeroEntriesCount++;
                return soFar + Math.log(value);
            }
            else {
                return soFar;
            }
        }, 0);
        return nonZeroEntriesCount === 0
            ? null
            : Math.pow(Math.E, reduced / nonZeroEntriesCount);
    };
    AggregationCalculator.prototype.distinct = function (relation, column) {
        var distinctMap = new Map();
        relation.entries.forEach(function (entry) {
            var value = entry.getField(column);
            distinctMap.set(value, entry);
        });
        return new Relation(Array.from(distinctMap.values()), relation.getTables());
    };
    return AggregationCalculator;
}());
var AggregationStep = (function (_super) {
    __extends(AggregationStep, _super);
    function AggregationStep(aggregatedColumns) {
        var _this = _super.call(this, PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD) || this;
        _this.aggregatedColumns = aggregatedColumns;
        return _this;
    }
    AggregationStep.prototype.toString = function () {
        var columnNames = this.aggregatedColumns.map(function (column) {
            return column.getNormalizedName();
        });
        return "aggregation(".concat(columnNames.toString(), ")");
    };
    AggregationStep.prototype.execInternal = function (relations, journal, context) {
        var _this = this;
        relations.forEach(function (relation) {
            var calculator = new AggregationCalculator(relation, _this.aggregatedColumns);
            calculator.calculate();
        }, this);
        return relations;
    };
    return AggregationStep;
}(PhysicalQueryPlanNode));
var CrossProductStep = (function (_super) {
    __extends(CrossProductStep, _super);
    function CrossProductStep() {
        return _super.call(this, 2, ExecType.ALL) || this;
    }
    CrossProductStep.prototype.toString = function () {
        return 'cross_product';
    };
    CrossProductStep.prototype.execInternal = function (relations, journal, context) {
        return this.crossProduct(relations[0], relations[1]);
    };
    CrossProductStep.prototype.crossProduct = function (leftRelation, rightRelation) {
        var combinedEntries = [];
        var leftRelationTableNames = leftRelation.getTables();
        var rightRelationTableNames = rightRelation.getTables();
        leftRelation.entries.forEach(function (le) {
            rightRelation.entries.forEach(function (re) {
                var combinedEntry = RelationEntry.combineEntries(le, leftRelationTableNames, re, rightRelationTableNames);
                combinedEntries.push(combinedEntry);
            });
        });
        var srcTables = leftRelation
            .getTables()
            .concat(rightRelation.getTables());
        return [new Relation(combinedEntries, srcTables)];
    };
    return CrossProductStep;
}(PhysicalQueryPlanNode));
var DeleteStep = (function (_super) {
    __extends(DeleteStep, _super);
    function DeleteStep(table) {
        var _this = _super.call(this, 1, ExecType.FIRST_CHILD) || this;
        _this.table = table;
        return _this;
    }
    DeleteStep.prototype.toString = function () {
        return "delete(".concat(this.table.getName(), ")");
    };
    DeleteStep.prototype.execInternal = function (relations, journal, context) {
        var rows = relations[0].entries.map(function (entry) { return entry.row; });
        journal.remove(this.table, rows);
        return [Relation.createEmpty()];
    };
    return DeleteStep;
}(PhysicalQueryPlanNode));
var GetRowCountStep = (function (_super) {
    __extends(GetRowCountStep, _super);
    function GetRowCountStep(global, table) {
        var _this = _super.call(this, 0, ExecType.NO_CHILD) || this;
        _this.table = table;
        _this.indexStore = global.getService(Service.INDEX_STORE);
        return _this;
    }
    GetRowCountStep.prototype.toString = function () {
        return "get_row_count(".concat(this.table.getName(), ")");
    };
    GetRowCountStep.prototype.execInternal = function (relations, journal, context) {
        var rowIdIndex = this.indexStore.get(this.table.getRowIdIndexName());
        var relation = new Relation([], [this.table.getName()]);
        relation.setAggregationResult(fn.count(), rowIdIndex.stats().totalRows);
        return [relation];
    };
    return GetRowCountStep;
}(PhysicalQueryPlanNode));
var TableAccessFullStep = (function (_super) {
    __extends(TableAccessFullStep, _super);
    function TableAccessFullStep(global, table) {
        var _this = _super.call(this, 0, ExecType.NO_CHILD) || this;
        _this.table = table;
        _this.cache = global.getService(Service.CACHE);
        _this.indexStore = global.getService(Service.INDEX_STORE);
        return _this;
    }
    TableAccessFullStep.prototype.toString = function () {
        var postfix = '';
        var table = this.table;
        if (table.getAlias()) {
            postfix = " as ".concat(table.getAlias());
        }
        return "table_access(".concat(this.table.getName()).concat(postfix, ")");
    };
    TableAccessFullStep.prototype.execInternal = function (relations, journal, context) {
        var table = this.table;
        var rowIds = this.indexStore.get(table.getRowIdIndexName()).getRange();
        return [
            Relation.fromRows(this.cache.getMany(rowIds), [
                table.getEffectiveName(),
            ]),
        ];
    };
    return TableAccessFullStep;
}(PhysicalQueryPlanNode));
var GetRowCountPass = (function (_super) {
    __extends(GetRowCountPass, _super);
    function GetRowCountPass(global) {
        var _this = _super.call(this) || this;
        _this.global = global;
        return _this;
    }
    GetRowCountPass.prototype.rewrite = function (rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        var tableAccessFullStep = TreeHelper.find(rootNode, function (node) { return node instanceof TableAccessFullStep; })[0];
        var getRowCountStep = new GetRowCountStep(this.global, tableAccessFullStep.table);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, getRowCountStep, getRowCountStep);
        return this.rootNode;
    };
    GetRowCountPass.prototype.canOptimize = function (queryContext) {
        var isDefAndNotNull = function (v) { return v !== null && v !== undefined; };
        var isCandidate = queryContext.columns.length === 1 &&
            queryContext.from.length === 1 &&
            !isDefAndNotNull(queryContext.where) &&
            !isDefAndNotNull(queryContext.limit) &&
            !isDefAndNotNull(queryContext.skip) &&
            !isDefAndNotNull(queryContext.groupBy);
        if (isCandidate) {
            var column = queryContext.columns[0];
            return (column instanceof AggregatedColumn &&
                column.aggregatorType === FnType.COUNT &&
                column.child instanceof StarColumn);
        }
        return false;
    };
    return GetRowCountPass;
}(RewritePass));
var GroupByStep = (function (_super) {
    __extends(GroupByStep, _super);
    function GroupByStep(groupByColumns) {
        var _this = _super.call(this, 1, ExecType.FIRST_CHILD) || this;
        _this.groupByColumns = groupByColumns;
        return _this;
    }
    GroupByStep.prototype.toString = function () {
        var columnNames = this.groupByColumns.map(function (column) {
            return column.getNormalizedName();
        });
        return "groupBy(".concat(columnNames.toString(), ")");
    };
    GroupByStep.prototype.execInternal = function (relations, journal, ctx) {
        return this.calculateGroupedRelations(relations[0]);
    };
    GroupByStep.prototype.calculateGroupedRelations = function (relation) {
        var _this = this;
        var groupMap = new MapSet();
        var getKey = function (entry) {
            var keys = _this.groupByColumns.map(function (column) { return entry.getField(column); });
            return keys.join(',');
        };
        relation.entries.forEach(function (entry) { return groupMap.set(getKey(entry), entry); });
        return groupMap.keys().map(function (key) {
            return new Relation(groupMap.get(key), relation.getTables());
        });
    };
    return GroupByStep;
}(PhysicalQueryPlanNode));
var JoinAlgorithm;
(function (JoinAlgorithm) {
    JoinAlgorithm["HASH"] = "hash";
    JoinAlgorithm["INDEX_NESTED_LOOP"] = "index_nested_loop";
    JoinAlgorithm["NESTED_LOOP"] = "nested_loop";
})(JoinAlgorithm || (JoinAlgorithm = {}));
var JoinStep = (function (_super) {
    __extends(JoinStep, _super);
    function JoinStep(global, predicate, isOuterJoin) {
        var _this = _super.call(this, 2, ExecType.ALL) || this;
        _this.predicate = predicate;
        _this.isOuterJoin = isOuterJoin;
        _this.indexStore = global.getService(Service.INDEX_STORE);
        _this.cache = global.getService(Service.CACHE);
        _this.algorithm =
            _this.predicate.evaluatorType === EvalType.EQ
                ? JoinAlgorithm.HASH
                : JoinAlgorithm.NESTED_LOOP;
        _this.indexJoinInfo = null;
        return _this;
    }
    JoinStep.prototype.toString = function () {
        return ("join(type: ".concat(this.isOuterJoin ? 'outer' : 'inner', ", ") +
            "impl: ".concat(this.algorithm, ", ").concat(this.predicate.toString(), ")"));
    };
    JoinStep.prototype.execInternal = function (relations, journal, context) {
        switch (this.algorithm) {
            case JoinAlgorithm.HASH:
                return [
                    this.predicate.evalRelationsHashJoin(relations[0], relations[1], this.isOuterJoin),
                ];
            case JoinAlgorithm.INDEX_NESTED_LOOP:
                return [
                    this.predicate.evalRelationsIndexNestedLoopJoin(relations[0], relations[1], this.indexJoinInfo, this.cache),
                ];
            default:
                return [
                    this.predicate.evalRelationsNestedLoopJoin(relations[0], relations[1], this.isOuterJoin),
                ];
        }
    };
    JoinStep.prototype.markAsIndexJoin = function (column) {
        this.algorithm = JoinAlgorithm.INDEX_NESTED_LOOP;
        var index = this.indexStore.get(column.getIndex().getNormalizedName());
        this.indexJoinInfo = {
            index: index,
            indexedColumn: column,
            nonIndexedColumn: column === this.predicate.leftColumn
                ? this.predicate.rightColumn
                : this.predicate.leftColumn,
        };
    };
    return JoinStep;
}(PhysicalQueryPlanNode));
var NoOpStep = (function (_super) {
    __extends(NoOpStep, _super);
    function NoOpStep(relations) {
        var _this = _super.call(this, PhysicalQueryPlanNode.ANY, ExecType.NO_CHILD) || this;
        _this.relations = relations;
        return _this;
    }
    NoOpStep.prototype.toString = function () {
        return "no_op_step(".concat(this.relations[0].getTables().join(','), ")");
    };
    NoOpStep.prototype.execInternal = function (relations, journal, context) {
        return this.relations;
    };
    return NoOpStep;
}(PhysicalQueryPlanNode));
var IndexJoinPass = (function (_super) {
    __extends(IndexJoinPass, _super);
    function IndexJoinPass() {
        return _super.call(this) || this;
    }
    IndexJoinPass.prototype.rewrite = function (rootNode, queryContext) {
        this.rootNode = rootNode;
        if (!this.canOptimize(queryContext)) {
            return rootNode;
        }
        var joinSteps = TreeHelper.find(rootNode, function (node) { return node instanceof JoinStep; });
        joinSteps.forEach(this.processJoinStep, this);
        return this.rootNode;
    };
    IndexJoinPass.prototype.canOptimize = function (queryContext) {
        return queryContext.from.length > 1;
    };
    IndexJoinPass.prototype.processJoinStep = function (joinStep) {
        if (joinStep.predicate.evaluatorType !== EvalType.EQ ||
            joinStep.isOuterJoin) {
            return;
        }
        var getColumnForTable = function (table) {
            return table.getEffectiveName() ===
                joinStep.predicate.rightColumn.getTable().getEffectiveName()
                ? joinStep.predicate.rightColumn
                : joinStep.predicate.leftColumn;
        };
        var getCandidate = function (executionStep) {
            if (!(executionStep instanceof TableAccessFullStep)) {
                return null;
            }
            var candidateColumn = getColumnForTable(executionStep.table);
            return candidateColumn.getIndex() === null
                ? null
                : candidateColumn;
        };
        var leftCandidate = getCandidate(joinStep.getChildAt(0));
        var rightCandidate = getCandidate(joinStep.getChildAt(1));
        if (leftCandidate === null && rightCandidate === null) {
            return;
        }
        var chosenColumn = rightCandidate !== null ? rightCandidate : leftCandidate;
        joinStep.markAsIndexJoin(chosenColumn);
        var dummyRelation = new Relation([], [chosenColumn.getTable().getEffectiveName()]);
        joinStep.replaceChildAt(new NoOpStep([dummyRelation]), chosenColumn === leftCandidate ? 0 : 1);
    };
    return IndexJoinPass;
}(RewritePass));
var BoundedKeyRangeCalculator = (function () {
    function BoundedKeyRangeCalculator(indexSchema, predicateMap) {
        this.indexSchema = indexSchema;
        this.predicateMap = predicateMap;
        this.lastQueryContext = null;
        this.combinations = null;
    }
    BoundedKeyRangeCalculator.prototype.getKeyRangeCombinations = function (queryContext) {
        if (this.lastQueryContext === queryContext) {
            return this.combinations;
        }
        var keyRangeMap = this.calculateKeyRangeMap(queryContext);
        this.fillMissingKeyRanges(keyRangeMap);
        this.combinations =
            this.indexSchema.columns.length === 1
                ? Array.from(keyRangeMap.values())[0].getValues()
                : this.calculateCartesianProduct(this.getSortedKeyRangeSets(keyRangeMap));
        this.lastQueryContext = queryContext;
        return this.combinations;
    };
    BoundedKeyRangeCalculator.prototype.calculateKeyRangeMap = function (queryContext) {
        var _this = this;
        var keyRangeMap = new Map();
        Array.from(this.predicateMap.keys()).forEach(function (columnName) {
            var predicateIds = _this.predicateMap.get(columnName);
            var predicates = predicateIds.map(function (predicateId) {
                return queryContext.getPredicate(predicateId);
            }, _this);
            var keyRangeSetSoFar = new SingleKeyRangeSet([SingleKeyRange.all()]);
            predicates.forEach(function (predicate) {
                keyRangeSetSoFar = SingleKeyRangeSet.intersect(keyRangeSetSoFar, predicate.toKeyRange());
            });
            keyRangeMap.set(columnName, keyRangeSetSoFar);
        }, this);
        return keyRangeMap;
    };
    BoundedKeyRangeCalculator.prototype.fillMissingKeyRanges = function (keyRangeMap) {
        var getAllKeyRange = function () { return new SingleKeyRangeSet([SingleKeyRange.all()]); };
        for (var i = this.indexSchema.columns.length - 1; i >= 0; i--) {
            var column = this.indexSchema.columns[i];
            var keyRangeSet = keyRangeMap.get(column.schema.getName()) || null;
            if (keyRangeSet !== null) {
                break;
            }
            keyRangeMap.set(column.schema.getName(), getAllKeyRange());
        }
    };
    BoundedKeyRangeCalculator.prototype.getSortedKeyRangeSets = function (keyRangeMap) {
        var sortHelper = new Map();
        var priority = 0;
        this.indexSchema.columns.forEach(function (column) {
            sortHelper.set(column.schema.getName(), priority);
            priority++;
        });
        var sortedColumnNames = Array.from(keyRangeMap.keys()).sort(function (a, b) { return (sortHelper.get(a) || 0) - (sortHelper.get(b) || 0); });
        return sortedColumnNames.map(function (columnName) { return keyRangeMap.get(columnName); });
    };
    BoundedKeyRangeCalculator.prototype.calculateCartesianProduct = function (keyRangeSets) {
        assert(keyRangeSets.length > 1, 'Should only be called for cross-column indices.');
        var keyRangeSetsAsArrays = keyRangeSets.map(function (keyRangeSet) {
            return keyRangeSet.getValues();
        });
        return ArrayHelper.product(keyRangeSetsAsArrays);
    };
    return BoundedKeyRangeCalculator;
}());
var IndexRangeCandidate = (function () {
    function IndexRangeCandidate(indexStore, indexSchema) {
        this.indexStore = indexStore;
        this.indexSchema = indexSchema;
        this.indexedColumnNames = new Set(this.indexSchema.columns.map(function (col) { return col.schema.getName(); }));
        this.predicateMap = null;
        this.keyRangeCalculator = null;
    }
    IndexRangeCandidate.prototype.getPredicateIds = function () {
        return this.predicateMap ? this.predicateMap.values() : [];
    };
    IndexRangeCandidate.prototype.getKeyRangeCalculator = function () {
        assert(this.predicateMap !== null);
        if (this.keyRangeCalculator === null) {
            this.keyRangeCalculator = new BoundedKeyRangeCalculator(this.indexSchema, this.predicateMap);
        }
        return this.keyRangeCalculator;
    };
    IndexRangeCandidate.prototype.consumePredicates = function (predicates) {
        var _this = this;
        predicates.forEach(function (predicate) {
            var columnName = predicate.getColumns()[0].getName();
            if (_this.indexedColumnNames.has(columnName)) {
                if (_this.predicateMap === null) {
                    _this.predicateMap = new MapSet();
                }
                _this.predicateMap.set(columnName, predicate.getId());
            }
        }, this);
    };
    IndexRangeCandidate.prototype.isUsable = function () {
        var _this = this;
        if (this.predicateMap === null) {
            return false;
        }
        var unboundColumnFound = false;
        var isUsable = true;
        this.indexSchema.columns.every(function (column) {
            var isBound = _this.predicateMap.has(column.schema.getName());
            if (unboundColumnFound && isBound) {
                isUsable = false;
                return false;
            }
            if (!isBound) {
                unboundColumnFound = true;
            }
            return true;
        }, this);
        return isUsable;
    };
    IndexRangeCandidate.prototype.calculateCost = function (queryContext) {
        var combinations = this.getKeyRangeCalculator().getKeyRangeCombinations(queryContext);
        var indexData = this.indexStore.get(this.indexSchema.getNormalizedName());
        return combinations.reduce(function (costSoFar, combination) {
            return costSoFar + indexData.cost(combination);
        }, 0);
    };
    return IndexRangeCandidate;
}());
var INDEX_QUERY_THRESHOLD_PERCENT = 0.02;
var IndexCostEstimator = (function () {
    function IndexCostEstimator(global, tableSchema) {
        this.tableSchema = tableSchema;
        this.indexStore = global.getService(Service.INDEX_STORE);
    }
    IndexCostEstimator.prototype.chooseIndexFor = function (queryContext, predicates) {
        var candidatePredicates = predicates.filter(this.isCandidate, this);
        if (candidatePredicates.length === 0) {
            return null;
        }
        var indexRangeCandidates = this.generateIndexRangeCandidates(candidatePredicates);
        if (indexRangeCandidates.length === 0) {
            return null;
        }
        if (indexRangeCandidates.length === 1) {
            return indexRangeCandidates[0];
        }
        var minCost = Number.MAX_VALUE;
        return indexRangeCandidates.reduce(function (prev, curr) {
            var cost = curr.calculateCost(queryContext);
            if (cost < minCost) {
                minCost = cost;
                return curr;
            }
            return prev;
        }, null);
    };
    IndexCostEstimator.prototype.getIndexQueryThreshold = function () {
        var rowIdIndex = this.indexStore.get(this.tableSchema.getRowIdIndexName());
        return Math.floor(rowIdIndex.stats().totalRows * INDEX_QUERY_THRESHOLD_PERCENT);
    };
    IndexCostEstimator.prototype.generateIndexRangeCandidates = function (predicates) {
        var _this = this;
        var indexSchemas = this.tableSchema.getIndices();
        return indexSchemas
            .map(function (indexSchema) {
            var indexRangeCandidate = new IndexRangeCandidate(_this.indexStore, indexSchema);
            indexRangeCandidate.consumePredicates(predicates);
            return indexRangeCandidate;
        }, this)
            .filter(function (indexRangeCandidate) { return indexRangeCandidate.isUsable(); });
    };
    IndexCostEstimator.prototype.isCandidate = function (predicate) {
        if (predicate instanceof ValuePredicate) {
            return this.isCandidateValuePredicate(predicate);
        }
        else if (predicate instanceof CombinedPredicate) {
            return this.isCandidateCombinedPredicate(predicate);
        }
        else {
            return false;
        }
    };
    IndexCostEstimator.prototype.isCandidateCombinedPredicate = function (predicate) {
        if (!predicate.isKeyRangeCompatible()) {
            return false;
        }
        var predicateColumn = predicate.getChildAt(0).column;
        if (predicateColumn.getTable() !== this.tableSchema) {
            return false;
        }
        return predicate.getChildCount() <= this.getIndexQueryThreshold();
    };
    IndexCostEstimator.prototype.isCandidateValuePredicate = function (predicate) {
        if (!predicate.isKeyRangeCompatible() ||
            predicate.column.getTable() !== this.tableSchema) {
            return false;
        }
        if (predicate.evaluatorType === EvalType.IN &&
            predicate.peek().length > this.getIndexQueryThreshold()) {
            return false;
        }
        return true;
    };
    return IndexCostEstimator;
}());
var IndexRangeScanStep = (function (_super) {
    __extends(IndexRangeScanStep, _super);
    function IndexRangeScanStep(global, index, keyRangeCalculator, reverseOrder) {
        var _this = _super.call(this, 0, ExecType.NO_CHILD) || this;
        _this.index = index;
        _this.keyRangeCalculator = keyRangeCalculator;
        _this.reverseOrder = reverseOrder;
        _this.indexStore = global.getService(Service.INDEX_STORE);
        _this.useLimit = false;
        _this.useSkip = false;
        return _this;
    }
    IndexRangeScanStep.prototype.toString = function () {
        return ("index_range_scan(".concat(this.index.getNormalizedName(), ", ?, ") +
            (this.reverseOrder ? 'reverse' : 'natural') +
            (this.useLimit ? ', limit:?' : '') +
            (this.useSkip ? ', skip:?' : '') +
            ')');
    };
    IndexRangeScanStep.prototype.toContextString = function (context) {
        var results = this.toString();
        var keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        results = results.replace('?', keyRanges.toString());
        if (this.useLimit) {
            results = results.replace('?', context.limit.toString());
        }
        if (this.useSkip) {
            results = results.replace('?', context.skip.toString());
        }
        return results;
    };
    IndexRangeScanStep.prototype.execInternal = function (relations, journal, ctx) {
        var context = ctx;
        var keyRanges = this.keyRangeCalculator.getKeyRangeCombinations(context);
        var index = this.indexStore.get(this.index.getNormalizedName());
        var rowIds;
        if (keyRanges.length === 1 &&
            keyRanges[0] instanceof SingleKeyRange &&
            keyRanges[0].isOnly()) {
            rowIds = IndexHelper.slice(index.get(keyRanges[0].from), false, this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        else {
            rowIds = index.getRange(keyRanges, this.reverseOrder, this.useLimit ? context.limit : undefined, this.useSkip ? context.skip : undefined);
        }
        var rows = rowIds.map(function (rowId) { return new Row(rowId, {}); });
        return [Relation.fromRows(rows, [this.index.tableName])];
    };
    return IndexRangeScanStep;
}(PhysicalQueryPlanNode));
var SelectStep = (function (_super) {
    __extends(SelectStep, _super);
    function SelectStep(predicateId) {
        var _this = _super.call(this, 1, ExecType.FIRST_CHILD) || this;
        _this.predicateId = predicateId;
        return _this;
    }
    SelectStep.prototype.toString = function () {
        return 'select(?)';
    };
    SelectStep.prototype.toContextString = function (context) {
        var predicate = context.getPredicate(this.predicateId);
        return this.toString().replace('?', predicate.toString());
    };
    SelectStep.prototype.execInternal = function (relations, journal, context) {
        var predicate = context.getPredicate(this.predicateId);
        return [predicate.eval(relations[0])];
    };
    return SelectStep;
}(PhysicalQueryPlanNode));
var TableAccessByRowIdStep = (function (_super) {
    __extends(TableAccessByRowIdStep, _super);
    function TableAccessByRowIdStep(global, table) {
        var _this = _super.call(this, 1, ExecType.FIRST_CHILD) || this;
        _this.table = table;
        _this.cache = global.getService(Service.CACHE);
        return _this;
    }
    TableAccessByRowIdStep.prototype.toString = function () {
        return "table_access_by_row_id(".concat(this.table.getName(), ")");
    };
    TableAccessByRowIdStep.prototype.execInternal = function (relations, journal, ctx) {
        return [
            Relation.fromRows(this.cache.getMany(relations[0].getRowIds()), [
                this.table.getEffectiveName(),
            ]),
        ];
    };
    return TableAccessByRowIdStep;
}(PhysicalQueryPlanNode));
var IndexRangeScanPass = (function (_super) {
    __extends(IndexRangeScanPass, _super);
    function IndexRangeScanPass(global) {
        var _this = _super.call(this) || this;
        _this.global = global;
        return _this;
    }
    IndexRangeScanPass.prototype.rewrite = function (rootNode, queryContext) {
        var _this = this;
        this.rootNode = rootNode;
        var tableAccessFullSteps = TreeHelper.find(rootNode, function (node) { return node instanceof TableAccessFullStep; });
        tableAccessFullSteps.forEach(function (tableAccessFullStep) {
            var selectStepsCandidates = _this.findSelectSteps(tableAccessFullStep);
            if (selectStepsCandidates.length === 0) {
                return;
            }
            var costEstimator = new IndexCostEstimator(_this.global, tableAccessFullStep.table);
            var indexRangeCandidate = costEstimator.chooseIndexFor(queryContext, selectStepsCandidates.map(function (c) { return queryContext.getPredicate(c.predicateId); }));
            if (indexRangeCandidate === null) {
                return;
            }
            var predicateToSelectStepMap = new Map();
            selectStepsCandidates.forEach(function (selectStep) {
                predicateToSelectStepMap.set(selectStep.predicateId, selectStep);
            }, _this);
            _this.rootNode = _this.replaceWithIndexRangeScanStep(indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep);
        }, this);
        return this.rootNode;
    };
    IndexRangeScanPass.prototype.findSelectSteps = function (startNode) {
        var selectSteps = [];
        var node = startNode.getParent();
        while (node) {
            if (node instanceof SelectStep) {
                selectSteps.push(node);
            }
            else if (node instanceof JoinStep) {
                break;
            }
            node = node.getParent();
        }
        return selectSteps;
    };
    IndexRangeScanPass.prototype.replaceWithIndexRangeScanStep = function (indexRangeCandidate, predicateToSelectStepMap, tableAccessFullStep) {
        var predicateIds = indexRangeCandidate.getPredicateIds();
        var selectSteps = predicateIds.map(function (predicateId) {
            return predicateToSelectStepMap.get(predicateId);
        });
        selectSteps.forEach(TreeHelper.removeNode);
        var indexRangeScanStep = new IndexRangeScanStep(this.global, indexRangeCandidate.indexSchema, indexRangeCandidate.getKeyRangeCalculator(), false);
        var tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
        tableAccessByRowIdStep.addChild(indexRangeScanStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        return indexRangeScanStep.getRoot();
    };
    return IndexRangeScanPass;
}(RewritePass));
var InsertStep = (function (_super) {
    __extends(InsertStep, _super);
    function InsertStep(global, table) {
        var _this = _super.call(this, 0, ExecType.NO_CHILD) || this;
        _this.table = table;
        _this.indexStore = global.getService(Service.INDEX_STORE);
        return _this;
    }
    InsertStep.assignAutoIncrementPks = function (t, values, indexStore) {
        var table = t;
        var pkIndexSchema = table.getConstraint().getPrimaryKey();
        var autoIncrement = pkIndexSchema === null ? false : pkIndexSchema.columns[0].autoIncrement;
        if (autoIncrement) {
            var pkColumnName_1 = pkIndexSchema.columns[0].schema.getName();
            var index = indexStore.get(pkIndexSchema.getNormalizedName());
            var max = index.stats().maxKeyEncountered;
            var maxKey_1 = max === null ? 0 : max;
            values.forEach(function (row) {
                var val = row.payload()[pkColumnName_1];
                if (val === 0 || val === null || val === undefined) {
                    maxKey_1++;
                    row.payload()[pkColumnName_1] = maxKey_1;
                }
            });
        }
    };
    InsertStep.prototype.toString = function () {
        return "insert(".concat(this.table.getName(), ")");
    };
    InsertStep.prototype.execInternal = function (relations, journal, queryContext) {
        var values = queryContext.values;
        InsertStep.assignAutoIncrementPks(this.table, values, this.indexStore);
        journal.insert(this.table, values);
        return [Relation.fromRows(values, [this.table.getName()])];
    };
    return InsertStep;
}(PhysicalQueryPlanNode));
var InsertOrReplaceStep = (function (_super) {
    __extends(InsertOrReplaceStep, _super);
    function InsertOrReplaceStep(global, table) {
        var _this = _super.call(this, 0, ExecType.NO_CHILD) || this;
        _this.table = table;
        _this.indexStore = global.getService(Service.INDEX_STORE);
        return _this;
    }
    InsertOrReplaceStep.prototype.toString = function () {
        return "insert_replace(".concat(this.table.getName(), ")");
    };
    InsertOrReplaceStep.prototype.execInternal = function (relations, journal, ctx) {
        var queryContext = ctx;
        InsertStep.assignAutoIncrementPks(this.table, queryContext.values, this.indexStore);
        journal.insertOrReplace(this.table, queryContext.values);
        return [Relation.fromRows(queryContext.values, [this.table.getName()])];
    };
    return InsertOrReplaceStep;
}(PhysicalQueryPlanNode));
var LimitStep = (function (_super) {
    __extends(LimitStep, _super);
    function LimitStep() {
        return _super.call(this, 1, ExecType.FIRST_CHILD) || this;
    }
    LimitStep.prototype.toString = function () {
        return 'limit(?)';
    };
    LimitStep.prototype.toContextString = function (context) {
        return this.toString().replace('?', context.limit.toString());
    };
    LimitStep.prototype.execInternal = function (relations, journal, context) {
        relations[0].entries.splice(context.limit);
        return relations;
    };
    return LimitStep;
}(PhysicalQueryPlanNode));
var OrderByStep = (function (_super) {
    __extends(OrderByStep, _super);
    function OrderByStep(orderBy) {
        var _this = _super.call(this, PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD) || this;
        _this.orderBy = orderBy;
        return _this;
    }
    OrderByStep.prototype.toString = function () {
        return "order_by(".concat(SelectContext.orderByToString(this.orderBy), ")");
    };
    OrderByStep.prototype.execInternal = function (relations, journal, context) {
        if (relations.length === 1) {
            var distinctColumn = this.findDistinctColumn(relations[0]);
            var relationToSort = distinctColumn === null
                ? relations[0]
                : relations[0].getAggregationResult(distinctColumn);
            relationToSort.entries.sort(this.entryComparatorFn.bind(this));
        }
        else {
            relations.sort(this.relationComparatorFn.bind(this));
        }
        return relations;
    };
    OrderByStep.prototype.findDistinctColumn = function (relation) {
        var distinctColumn = null;
        this.orderBy.every(function (entry) {
            var tempDistinctColumn = fn.distinct(entry.column);
            if (relation.hasAggregationResult(tempDistinctColumn)) {
                distinctColumn = tempDistinctColumn;
                return false;
            }
            return true;
        }, this);
        return distinctColumn;
    };
    OrderByStep.prototype.comparator = function (getLeftPayload, getRightPayload) {
        var order;
        var leftPayload = null;
        var rightPayload = null;
        var comparisonIndex = -1;
        do {
            comparisonIndex++;
            var column = this.orderBy[comparisonIndex].column;
            order = this.orderBy[comparisonIndex].order;
            leftPayload = getLeftPayload(column);
            rightPayload = getRightPayload(column);
        } while (leftPayload === rightPayload &&
            comparisonIndex + 1 < this.orderBy.length);
        var result = leftPayload < rightPayload ? -1 : leftPayload > rightPayload ? 1 : 0;
        result = order === Order.ASC ? result : -result;
        return result;
    };
    OrderByStep.prototype.entryComparatorFn = function (lhs, rhs) {
        return this.comparator(function (column) { return lhs.getField(column); }, function (column) { return rhs.getField(column); });
    };
    OrderByStep.prototype.relationComparatorFn = function (lhs, rhs) {
        return this.comparator(function (column) {
            return (column instanceof AggregatedColumn
                ? lhs.getAggregationResult(column)
                : lhs.entries[lhs.entries.length - 1].getField(column));
        }, function (column) {
            return (column instanceof AggregatedColumn
                ? rhs.getAggregationResult(column)
                : rhs.entries[rhs.entries.length - 1].getField(column));
        });
    };
    return OrderByStep;
}(PhysicalQueryPlanNode));
var RelationTransformer = (function () {
    function RelationTransformer(relation, columns) {
        this.relation = relation;
        this.columns = columns;
    }
    RelationTransformer.transformMany = function (relations, columns) {
        var entries = relations.map(function (relation) {
            var relationTransformer = new RelationTransformer(relation, columns);
            var singleEntryRelation = relationTransformer.getTransformed();
            return singleEntryRelation.entries[0];
        });
        return new Relation(entries, relations[0].getTables());
    };
    RelationTransformer.prototype.getTransformed = function () {
        var aggregatedColumnsExist = this.columns.some(function (column) { return column instanceof AggregatedColumn; });
        return aggregatedColumnsExist
            ? this.handleAggregatedColumns()
            : this.handleNonAggregatedColumns();
    };
    RelationTransformer.prototype.handleAggregatedColumns = function () {
        var _this = this;
        if (this.columns.length === 1 &&
            this.columns[0].aggregatorType === FnType.DISTINCT) {
            var distinctRelation = this.relation.getAggregationResult(this.columns[0]);
            var newEntries = distinctRelation.entries.map(function (e) {
                var newEntry = new RelationEntry(new Row(Row.DUMMY_ID, {}), _this.relation.isPrefixApplied());
                newEntry.setField(_this.columns[0], e.getField(_this.columns[0].child));
                return newEntry;
            }, this);
            return new Relation(newEntries, []);
        }
        var entry = new RelationEntry(new Row(Row.DUMMY_ID, {}), this.relation.isPrefixApplied());
        this.columns.forEach(function (column) {
            var value = column instanceof AggregatedColumn
                ? _this.relation.getAggregationResult(column)
                : _this.relation.entries[0].getField(column);
            entry.setField(column, value);
        }, this);
        return new Relation([entry], this.relation.getTables());
    };
    RelationTransformer.prototype.handleNonAggregatedColumns = function () {
        var _this = this;
        var transformedEntries = new Array(this.relation.entries.length);
        var isPrefixApplied = this.relation.isPrefixApplied();
        this.relation.entries.forEach(function (entry, index) {
            transformedEntries[index] = new RelationEntry(new Row(entry.row.id(), {}), isPrefixApplied);
            _this.columns.forEach(function (column) {
                transformedEntries[index].setField(column, entry.getField(column));
            }, _this);
        }, this);
        return new Relation(transformedEntries, this.relation.getTables());
    };
    return RelationTransformer;
}());
var ProjectStep = (function (_super) {
    __extends(ProjectStep, _super);
    function ProjectStep(columns, groupByColumns) {
        var _this = _super.call(this, PhysicalQueryPlanNode.ANY, ExecType.FIRST_CHILD) || this;
        _this.columns = columns;
        _this.groupByColumns = groupByColumns;
        return _this;
    }
    ProjectStep.prototype.toString = function () {
        var postfix = '';
        if (this.groupByColumns) {
            var groupBy = this.groupByColumns
                .map(function (col) { return col.getNormalizedName(); })
                .join(', ');
            postfix = ", groupBy(".concat(groupBy, ")");
        }
        return "project(".concat(this.columns.toString()).concat(postfix, ")");
    };
    ProjectStep.prototype.execInternal = function (relations, journal, context) {
        if (relations.length === 0) {
            return [Relation.createEmpty()];
        }
        else if (relations.length === 1) {
            return [this.execNonGroupByProjection(relations[0])];
        }
        else {
            return [this.execGroupByProjection(relations)];
        }
    };
    ProjectStep.prototype.hasAggregators = function () {
        var hasAggregators = this.columns.some(function (column) {
            return column instanceof AggregatedColumn;
        });
        return hasAggregators || this.groupByColumns !== null;
    };
    ProjectStep.prototype.execGroupByProjection = function (relations) {
        return RelationTransformer.transformMany(relations, this.columns);
    };
    ProjectStep.prototype.execNonGroupByProjection = function (relation) {
        if (this.columns.length === 0) {
            return relation;
        }
        var relationTransformer = new RelationTransformer(relation, this.columns);
        return relationTransformer.getTransformed();
    };
    return ProjectStep;
}(PhysicalQueryPlanNode));
var SkipStep = (function (_super) {
    __extends(SkipStep, _super);
    function SkipStep() {
        return _super.call(this, 1, ExecType.FIRST_CHILD) || this;
    }
    SkipStep.prototype.toString = function () {
        return 'skip(?)';
    };
    SkipStep.prototype.toContextString = function (context) {
        return this.toString().replace('?', context.skip.toString());
    };
    SkipStep.prototype.execInternal = function (relations, journal, context) {
        return [
            new Relation(relations[0].entries.slice(context.skip), relations[0].getTables()),
        ];
    };
    return SkipStep;
}(PhysicalQueryPlanNode));
var LimitSkipByIndexPass = (function (_super) {
    __extends(LimitSkipByIndexPass, _super);
    function LimitSkipByIndexPass() {
        return _super.call(this) || this;
    }
    LimitSkipByIndexPass.prototype.rewrite = function (rootNode, queryContext) {
        var _this = this;
        if (queryContext.limit === undefined && queryContext.skip === undefined) {
            return rootNode;
        }
        var indexRangeScanStep = this.findIndexRangeScanStep(rootNode);
        if (indexRangeScanStep === null) {
            return rootNode;
        }
        var nodes = TreeHelper.find(rootNode, function (node) { return node instanceof LimitStep || node instanceof SkipStep; });
        nodes.forEach(function (node) {
            _this.mergeToIndexRangeScanStep(node, indexRangeScanStep);
        }, this);
        return indexRangeScanStep.getRoot();
    };
    LimitSkipByIndexPass.prototype.mergeToIndexRangeScanStep = function (node, indexRangeScanStep) {
        if (node instanceof LimitStep) {
            indexRangeScanStep.useLimit = true;
        }
        else {
            indexRangeScanStep.useSkip = true;
        }
        return TreeHelper.removeNode(node).parent;
    };
    LimitSkipByIndexPass.prototype.findIndexRangeScanStep = function (rootNode) {
        var filterFn = function (node) {
            return node instanceof IndexRangeScanStep;
        };
        var stopFn = function (node) {
            var hasAggregators = node instanceof ProjectStep && node.hasAggregators();
            return (hasAggregators ||
                node instanceof OrderByStep ||
                node.getChildCount() !== 1 ||
                node instanceof SelectStep);
        };
        var indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    };
    return LimitSkipByIndexPass;
}(RewritePass));
var MultiIndexRangeScanStep = (function (_super) {
    __extends(MultiIndexRangeScanStep, _super);
    function MultiIndexRangeScanStep() {
        return _super.call(this, PhysicalQueryPlanNode.ANY, ExecType.ALL) || this;
    }
    MultiIndexRangeScanStep.prototype.toString = function () {
        return 'multi_index_range_scan()';
    };
    MultiIndexRangeScanStep.prototype.execInternal = function (relations, journal, ctx) {
        var entriesUnion = new Map();
        relations.forEach(function (relation) {
            relation.entries.forEach(function (entry) {
                entriesUnion.set(entry.row.id(), entry);
            });
        });
        var entries = Array.from(entriesUnion.values());
        return [new Relation(entries, relations[0].getTables())];
    };
    return MultiIndexRangeScanStep;
}(PhysicalQueryPlanNode));
var MultiColumnOrPass = (function (_super) {
    __extends(MultiColumnOrPass, _super);
    function MultiColumnOrPass(global) {
        var _this = _super.call(this) || this;
        _this.global = global;
        return _this;
    }
    MultiColumnOrPass.prototype.rewrite = function (rootNode, queryContext) {
        this.rootNode = rootNode;
        var orSelectSteps = this.findOrPredicates(queryContext);
        if (orSelectSteps.length === 0) {
            return this.rootNode;
        }
        var indexRangeCandidates = null;
        var orSelectStep = null;
        var i = 0;
        do {
            orSelectStep = orSelectSteps[i++];
            indexRangeCandidates = this.findIndexRangeCandidates(orSelectStep, queryContext);
        } while (indexRangeCandidates === null && i < orSelectSteps.length);
        if (indexRangeCandidates === null) {
            return this.rootNode;
        }
        var tableAccessFullStep = this.findTableAccessFullStep(indexRangeCandidates[0].indexSchema.tableName);
        if (tableAccessFullStep === null) {
            return this.rootNode;
        }
        this.rootNode = this.replaceWithIndexRangeScan(orSelectStep, tableAccessFullStep, indexRangeCandidates);
        return this.rootNode;
    };
    MultiColumnOrPass.prototype.findOrPredicates = function (queryContext) {
        var filterFn = function (node) {
            if (!(node instanceof SelectStep)) {
                return false;
            }
            var predicate = queryContext.getPredicate(node.predicateId);
            return (predicate instanceof CombinedPredicate &&
                predicate.operator === Operator.OR);
        };
        return TreeHelper.find(this.rootNode, filterFn);
    };
    MultiColumnOrPass.prototype.findTableAccessFullStep = function (tableName) {
        return (TreeHelper.find(this.rootNode, function (node) {
            return node instanceof TableAccessFullStep &&
                node.table.getName() === tableName;
        })[0] || null);
    };
    MultiColumnOrPass.prototype.findIndexRangeCandidates = function (selectStep, queryContext) {
        var predicate = queryContext.getPredicate(selectStep.predicateId);
        var tables = predicate.getTables();
        if (tables.size !== 1) {
            return null;
        }
        var tableSchema = Array.from(tables.values())[0];
        var indexCostEstimator = new IndexCostEstimator(this.global, tableSchema);
        var indexRangeCandidates = null;
        var allIndexed = predicate.getChildren().every(function (childPredicate) {
            var indexRangeCandidate = indexCostEstimator.chooseIndexFor(queryContext, [childPredicate]);
            if (indexRangeCandidate !== null) {
                indexRangeCandidates === null
                    ? (indexRangeCandidates = [indexRangeCandidate])
                    : indexRangeCandidates.push(indexRangeCandidate);
            }
            return indexRangeCandidate !== null;
        });
        return allIndexed ? indexRangeCandidates : null;
    };
    MultiColumnOrPass.prototype.replaceWithIndexRangeScan = function (selectStep, tableAccessFullStep, indexRangeCandidates) {
        var _this = this;
        var tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
        var multiIndexRangeScanStep = new MultiIndexRangeScanStep();
        tableAccessByRowIdStep.addChild(multiIndexRangeScanStep);
        indexRangeCandidates.forEach(function (candidate) {
            var indexRangeScanStep = new IndexRangeScanStep(_this.global, candidate.indexSchema, candidate.getKeyRangeCalculator(), false);
            multiIndexRangeScanStep.addChild(indexRangeScanStep);
        }, this);
        TreeHelper.removeNode(selectStep);
        TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, multiIndexRangeScanStep);
        return multiIndexRangeScanStep.getRoot();
    };
    return MultiColumnOrPass;
}(RewritePass));
var UnboundedKeyRangeCalculator = (function () {
    function UnboundedKeyRangeCalculator(indexSchema) {
        this.indexSchema = indexSchema;
    }
    UnboundedKeyRangeCalculator.prototype.getKeyRangeCombinations = function (queryContext) {
        return this.indexSchema.columns.length === 1
            ? [SingleKeyRange.all()]
            : [this.indexSchema.columns.map(function () { return SingleKeyRange.all(); })];
    };
    return UnboundedKeyRangeCalculator;
}());
var OrderByIndexPass = (function (_super) {
    __extends(OrderByIndexPass, _super);
    function OrderByIndexPass(global) {
        var _this = _super.call(this) || this;
        _this.global = global;
        return _this;
    }
    OrderByIndexPass.prototype.rewrite = function (rootNode, queryContext) {
        var orderByStep = this.findOrderByStep(rootNode, queryContext);
        if (orderByStep === null) {
            return rootNode;
        }
        var newSubtreeRoot = this.applyTableAccessFullOptimization(orderByStep);
        if (newSubtreeRoot === orderByStep) {
            newSubtreeRoot = this.applyIndexRangeScanStepOptimization(orderByStep);
        }
        return newSubtreeRoot.getRoot();
    };
    OrderByIndexPass.prototype.applyTableAccessFullOptimization = function (orderByStep) {
        var rootNode = orderByStep;
        var tableAccessFullStep = this.findTableAccessFullStep(orderByStep.getChildAt(0));
        if (tableAccessFullStep !== null) {
            var indexRangeCandidate = this.findIndexCandidateForOrderBy(tableAccessFullStep.table, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                return rootNode;
            }
            var indexRangeScanStep = new IndexRangeScanStep(this.global, indexRangeCandidate.indexSchema, new UnboundedKeyRangeCalculator(indexRangeCandidate.indexSchema), indexRangeCandidate.isReverse);
            var tableAccessByRowIdStep = new TableAccessByRowIdStep(this.global, tableAccessFullStep.table);
            tableAccessByRowIdStep.addChild(indexRangeScanStep);
            TreeHelper.removeNode(orderByStep);
            rootNode = TreeHelper.replaceNodeWithChain(tableAccessFullStep, tableAccessByRowIdStep, indexRangeScanStep);
        }
        return rootNode;
    };
    OrderByIndexPass.prototype.applyIndexRangeScanStepOptimization = function (orderByStep) {
        var rootNode = orderByStep;
        var indexRangeScanStep = this.findIndexRangeScanStep(orderByStep.getChildAt(0));
        if (indexRangeScanStep !== null) {
            var indexRangeCandidate = this.getIndexCandidateForIndexSchema(indexRangeScanStep.index, orderByStep.orderBy);
            if (indexRangeCandidate === null) {
                return rootNode;
            }
            indexRangeScanStep.reverseOrder = indexRangeCandidate.isReverse;
            rootNode = TreeHelper.removeNode(orderByStep)
                .parent;
        }
        return rootNode;
    };
    OrderByIndexPass.prototype.findIndexRangeScanStep = function (rootNode) {
        var filterFn = function (node) { return node instanceof IndexRangeScanStep; };
        var stopFn = function (node) { return node.getChildCount() !== 1; };
        var indexRangeScanSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return indexRangeScanSteps.length > 0 ? indexRangeScanSteps[0] : null;
    };
    OrderByIndexPass.prototype.findTableAccessFullStep = function (rootNode) {
        var filterFn = function (node) { return node instanceof TableAccessFullStep; };
        var stopFn = function (node) { return node.getChildCount() !== 1; };
        var tableAccessFullSteps = TreeHelper.find(rootNode, filterFn, stopFn);
        return tableAccessFullSteps.length > 0 ? tableAccessFullSteps[0] : null;
    };
    OrderByIndexPass.prototype.findOrderByStep = function (rootNode, queryContext) {
        if (queryContext.orderBy === undefined) {
            return null;
        }
        return TreeHelper.find(rootNode, function (node) { return node instanceof OrderByStep; })[0];
    };
    OrderByIndexPass.prototype.findIndexCandidateForOrderBy = function (tableSchema, orderBy) {
        var indexCandidate = null;
        var indexSchemas = tableSchema.getIndices();
        for (var i = 0; i < indexSchemas.length && indexCandidate === null; i++) {
            indexCandidate = this.getIndexCandidateForIndexSchema(indexSchemas[i], orderBy);
        }
        return indexCandidate;
    };
    OrderByIndexPass.prototype.getIndexCandidateForIndexSchema = function (indexSchema, orderBy) {
        var columnsMatch = indexSchema.columns.length === orderBy.length &&
            orderBy.every(function (singleOrderBy, j) {
                var indexedColumn = indexSchema.columns[j];
                return (singleOrderBy.column.getName() === indexedColumn.schema.getName());
            });
        if (!columnsMatch) {
            return null;
        }
        var isNaturalOrReverse = this.checkOrder(orderBy, indexSchema);
        if (!isNaturalOrReverse[0] && !isNaturalOrReverse[1]) {
            return null;
        }
        return {
            indexSchema: indexSchema,
            isReverse: isNaturalOrReverse[1],
        };
    };
    OrderByIndexPass.prototype.checkOrder = function (orderBy, indexSchema) {
        var ordersLeftBitmask = orderBy.reduce(function (soFar, columnOrderBy) {
            return (soFar << 1) | (columnOrderBy.order === Order.DESC ? 0 : 1);
        }, 0);
        var ordersRightBitmask = indexSchema.columns.reduce(function (soFar, indexedColumn) {
            return (soFar << 1) | (indexedColumn.order === Order.DESC ? 0 : 1);
        }, 0);
        var xorBitmask = ordersLeftBitmask ^ ordersRightBitmask;
        var isNatural = xorBitmask === 0;
        var isReverse = xorBitmask ===
            Math.pow(2, Math.max(orderBy.length, indexSchema.columns.length)) - 1;
        return [isNatural, isReverse];
    };
    return OrderByIndexPass;
}(RewritePass));
var PhysicalPlanRewriter = (function () {
    function PhysicalPlanRewriter(rootNode, queryContext, rewritePasses) {
        this.rootNode = rootNode;
        this.queryContext = queryContext;
        this.rewritePasses = rewritePasses;
    }
    PhysicalPlanRewriter.prototype.generate = function () {
        var _this = this;
        this.rewritePasses.forEach(function (rewritePass) {
            _this.rootNode = rewritePass.rewrite(_this.rootNode, _this.queryContext);
        }, this);
        return this.rootNode;
    };
    return PhysicalPlanRewriter;
}());
var UpdateStep = (function (_super) {
    __extends(UpdateStep, _super);
    function UpdateStep(table) {
        var _this = _super.call(this, 1, ExecType.FIRST_CHILD) || this;
        _this.table = table;
        return _this;
    }
    UpdateStep.prototype.toString = function () {
        return "update(".concat(this.table.getName(), ")");
    };
    UpdateStep.prototype.execInternal = function (relations, journal, context) {
        var _this = this;
        var table = this.table;
        var rows = relations[0].entries.map(function (entry) {
            var clone = table.deserializeRow(entry.row.serialize());
            context.set.forEach(function (update) {
                clone.payload()[update.column.getName()] = update.value;
            }, _this);
            return clone;
        }, this);
        journal.update(table, rows);
        return [Relation.createEmpty()];
    };
    return UpdateStep;
}(PhysicalQueryPlanNode));
var PhysicalPlanFactory = (function () {
    function PhysicalPlanFactory(global) {
        this.global = global;
        this.selectOptimizationPasses = [
            new IndexJoinPass(),
            new IndexRangeScanPass(global),
            new MultiColumnOrPass(global),
            new OrderByIndexPass(global),
            new LimitSkipByIndexPass(),
            new GetRowCountPass(global),
        ];
        this.deleteOptimizationPasses = [new IndexRangeScanPass(global)];
    }
    PhysicalPlanFactory.prototype.create = function (logicalQueryPlan, queryContext) {
        var logicalQueryPlanRoot = logicalQueryPlan.getRoot();
        if (logicalQueryPlanRoot instanceof InsertOrReplaceNode ||
            logicalQueryPlanRoot instanceof InsertNode) {
            return this.createPlan(logicalQueryPlan, queryContext);
        }
        if (logicalQueryPlanRoot instanceof ProjectNode ||
            logicalQueryPlanRoot instanceof LimitNode ||
            logicalQueryPlanRoot instanceof SkipNode) {
            return this.createPlan(logicalQueryPlan, queryContext, this.selectOptimizationPasses);
        }
        if (logicalQueryPlanRoot instanceof DeleteNode ||
            logicalQueryPlanRoot instanceof UpdateNode) {
            return this.createPlan(logicalQueryPlan, queryContext, this.deleteOptimizationPasses);
        }
        throw new Exception(ErrorCode.UNKNOWN_PLAN_NODE);
    };
    PhysicalPlanFactory.prototype.createPlan = function (logicalPlan, queryContext, rewritePasses) {
        var rootStep = TreeHelper.map(logicalPlan.getRoot(), this.mapFn.bind(this));
        if (rewritePasses !== undefined && rewritePasses !== null) {
            var planRewriter = new PhysicalPlanRewriter(rootStep, queryContext, rewritePasses);
            rootStep = planRewriter.generate();
        }
        return new PhysicalQueryPlan(rootStep, logicalPlan.getScope());
    };
    PhysicalPlanFactory.prototype.mapFn = function (node) {
        if (node instanceof ProjectNode) {
            return new ProjectStep(node.columns, node.groupByColumns);
        }
        else if (node instanceof GroupByNode) {
            return new GroupByStep(node.columns);
        }
        else if (node instanceof AggregationNode) {
            return new AggregationStep(node.columns);
        }
        else if (node instanceof OrderByNode) {
            return new OrderByStep(node.orderBy);
        }
        else if (node instanceof SkipNode) {
            return new SkipStep();
        }
        else if (node instanceof LimitNode) {
            return new LimitStep();
        }
        else if (node instanceof SelectNode) {
            return new SelectStep(node.predicate.getId());
        }
        else if (node instanceof CrossProductNode) {
            return new CrossProductStep();
        }
        else if (node instanceof JoinNode) {
            return new JoinStep(this.global, node.predicate, node.isOuterJoin);
        }
        else if (node instanceof TableAccessNode) {
            return new TableAccessFullStep(this.global, node.table);
        }
        else if (node instanceof DeleteNode) {
            return new DeleteStep(node.table);
        }
        else if (node instanceof UpdateNode) {
            return new UpdateStep(node.table);
        }
        else if (node instanceof InsertOrReplaceNode) {
            return new InsertOrReplaceStep(this.global, node.table);
        }
        else if (node instanceof InsertNode) {
            return new InsertStep(this.global, node.table);
        }
        throw new Exception(ErrorCode.UNKNOWN_NODE_TYPE);
    };
    return PhysicalPlanFactory;
}());
var DefaultQueryEngine = (function () {
    function DefaultQueryEngine(global) {
        this.logicalPlanFactory = new LogicalPlanFactory();
        this.physicalPlanFactory = new PhysicalPlanFactory(global);
    }
    DefaultQueryEngine.prototype.getPlan = function (query) {
        var logicalQueryPlan = this.logicalPlanFactory.create(query);
        return this.physicalPlanFactory.create(logicalQueryPlan, query);
    };
    return DefaultQueryEngine;
}());
var ExportTask = (function (_super) {
    __extends(ExportTask, _super);
    function ExportTask(global) {
        var _this = _super.call(this) || this;
        _this.global = global;
        _this.schema = global.getService(Service.SCHEMA);
        _this.scope = new Set(_this.schema.tables());
        _this.resolver = new Resolver();
        return _this;
    }
    ExportTask.prototype.execSync = function () {
        var indexStore = this.global.getService(Service.INDEX_STORE);
        var cache = this.global.getService(Service.CACHE);
        var tables = {};
        this.schema.tables().forEach(function (table) {
            var rowIds = indexStore.get(table.getRowIdIndexName()).getRange();
            var payloads = cache.getMany(rowIds).map(function (row) { return row.payload(); });
            tables[table.getName()] = payloads;
        });
        return {
            name: this.schema.name(),
            tables: tables,
            version: this.schema.version(),
        };
    };
    ExportTask.prototype.exec = function () {
        var results = this.execSync();
        var entry = new RelationEntry(new Row(Row.DUMMY_ID, results), true);
        return Promise.resolve([new Relation([entry], [])]);
    };
    ExportTask.prototype.getType = function () {
        return TransactionType.READ_ONLY;
    };
    ExportTask.prototype.getScope = function () {
        return this.scope;
    };
    ExportTask.prototype.getResolver = function () {
        return this.resolver;
    };
    ExportTask.prototype.getId = function () {
        return this.getUniqueNumber();
    };
    ExportTask.prototype.getPriority = function () {
        return TaskPriority.EXPORT_TASK;
    };
    return ExportTask;
}(UniqueId));
var ImportTask = (function (_super) {
    __extends(ImportTask, _super);
    function ImportTask(global, data) {
        var _this = _super.call(this) || this;
        _this.global = global;
        _this.data = data;
        _this.schema = global.getService(Service.SCHEMA);
        _this.scope = new Set(_this.schema.tables());
        _this.resolver = new Resolver();
        _this.backStore = global.getService(Service.BACK_STORE);
        _this.cache = global.getService(Service.CACHE);
        _this.indexStore = global.getService(Service.INDEX_STORE);
        return _this;
    }
    ImportTask.prototype.exec = function () {
        if (!this.backStore.supportsImport()) {
            throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        if (!this.isEmptyDB()) {
            throw new Exception(ErrorCode.IMPORT_TO_NON_EMPTY_DB);
        }
        if (this.schema.name() !== this.data['name'] ||
            this.schema.version() !== this.data['version']) {
            throw new Exception(ErrorCode.DB_MISMATCH);
        }
        if (this.data['tables'] === undefined || this.data['tables'] === null) {
            throw new Exception(ErrorCode.IMPORT_DATA_NOT_FOUND);
        }
        return this.import();
    };
    ImportTask.prototype.getType = function () {
        return TransactionType.READ_WRITE;
    };
    ImportTask.prototype.getScope = function () {
        return this.scope;
    };
    ImportTask.prototype.getResolver = function () {
        return this.resolver;
    };
    ImportTask.prototype.getId = function () {
        return this.getUniqueNumber();
    };
    ImportTask.prototype.getPriority = function () {
        return TaskPriority.IMPORT_TASK;
    };
    ImportTask.prototype.isEmptyDB = function () {
        var _this = this;
        return this.schema.tables().every(function (t) {
            var table = t;
            var index = _this.indexStore.get(table.getRowIdIndexName());
            if (index.stats().totalRows > 0) {
                return false;
            }
            return true;
        });
    };
    ImportTask.prototype.import = function () {
        var _this = this;
        var journal = new Journal(this.global, this.scope);
        var tx = this.backStore.createTx(this.getType(), Array.from(this.scope.values()), journal);
        Object.keys(this.data['tables']).forEach(function (tableName) {
            var tableSchema = _this.schema.table(tableName);
            var payloads = _this.data['tables'][tableName];
            var rows = payloads.map(function (value) {
                return tableSchema.createRow(value);
            });
            var table = tx.getTable(tableName, tableSchema.deserializeRow, TableType.DATA);
            _this.cache.setMany(tableName, rows);
            var indices = _this.indexStore.getTableIndices(tableName);
            rows.forEach(function (row) {
                indices.forEach(function (index) {
                    var key = row.keyOfIndex(index.getName());
                    index.add(key, row.id());
                });
            });
            table.put(rows);
        }, this);
        return tx.commit();
    };
    return ImportTask;
}(UniqueId));
var Capability = (function () {
    function Capability() {
        this.supported = false;
        this.indexedDb = false;
        this.webSql = false;
        this.localStorage = false;
        this.agent = '';
        this.browser = '';
        this.version = [];
        this.versionMap = new Map();
        this.detect();
    }
    Capability.get = function () {
        if (Capability.instance === undefined) {
            Capability.instance = new Capability();
        }
        return Capability.instance;
    };
    Capability.prototype.getDetection = function () {
        return "".concat(this.browser, " ").concat(this.version.join('.'));
    };
    Capability.prototype.detect = function () {
        if (!this.detectNodeJS()) {
            if (navigator) {
                this.agent = navigator.userAgent;
                this.detectBrowser();
            }
        }
    };
    Capability.prototype.convertVersion = function (version) {
        if (version === undefined) {
            return;
        }
        this.version = version.split('.').map(function (v) {
            var n = 0;
            try {
                n = Number(v);
            }
            catch (e) {
            }
            return n;
        });
    };
    Capability.prototype.detectNodeJS = function () {
        if (typeof process !== typeof undefined && process.version) {
            this.convertVersion(process.version.slice(1));
            this.supported = this.version[0] >= 7;
            this.browser = 'nodejs';
            this.indexedDb = false;
            this.webSql = false;
            return true;
        }
        return false;
    };
    Capability.prototype.detectBrowser = function () {
        if (this.isIE() || this.isAndroid()) {
            return;
        }
        this.localStorage = true;
        this.detectVersion();
        var checkSequence = [
            this.isEdge.bind(this),
            this.isFirefox.bind(this),
            this.isChrome.bind(this),
            this.isSafari.bind(this),
            this.isIOS.bind(this),
        ];
        checkSequence.some(function (fn) { return fn(); });
    };
    Capability.prototype.detectVersion = function () {
        var regex = new RegExp('(\\w[\\w ]+)' +
            '/' +
            '([^\\s]+)' +
            '\\s*' +
            '(?:\\((.*?)\\))?', 'g');
        var match = null;
        do {
            match = regex.exec(this.agent);
            if (match) {
                var version = match[0];
                this.versionMap.set(match[1], version.slice(version.indexOf('/') + 1));
            }
        } while (match);
    };
    Capability.prototype.isChrome = function () {
        var detected = false;
        if (this.agent.indexOf('Chrome') !== -1) {
            detected = true;
            this.convertVersion(this.versionMap.get('Chrome'));
        }
        else if (this.agent.indexOf('CriOS') !== -1) {
            detected = true;
            this.convertVersion(this.versionMap.get('CriOS'));
        }
        if (detected) {
            this.browser = 'chrome';
            this.supported = this.version[0] > 60;
            this.indexedDb = true;
            this.webSql = true;
            this.localStorage = true;
            return true;
        }
        return false;
    };
    Capability.prototype.isEdge = function () {
        if (this.agent.indexOf('Edge') !== -1) {
            this.browser = 'edge';
            this.supported = true;
            this.indexedDb = true;
            this.webSql = false;
            this.convertVersion(this.versionMap.get('Edge'));
            return true;
        }
        return false;
    };
    Capability.prototype.isFirefox = function () {
        if (this.agent.indexOf('Firefox') !== -1) {
            this.browser = 'firefox';
            this.convertVersion('Firefox');
            this.supported = this.version[0] > 60;
            this.indexedDb = true;
            this.webSql = false;
            this.localStorage = true;
            return true;
        }
        return false;
    };
    Capability.prototype.isIE = function () {
        if (this.agent.indexOf('Trident') !== -1 ||
            this.agent.indexOf('MSIE') !== -1) {
            this.browser = 'ie';
            return true;
        }
        return false;
    };
    Capability.prototype.isAndroid = function () {
        if (this.agent.indexOf('Android') !== -1 &&
            !this.isChrome() &&
            !this.isFirefox()) {
            this.browser = 'legacy_android';
            return true;
        }
        return false;
    };
    Capability.prototype.isSafari = function () {
        if (this.agent.indexOf('Safari') !== -1) {
            this.browser = 'safari';
            this.convertVersion(this.versionMap.get('Version'));
            this.supported = this.version[0] >= 10;
            this.indexedDb = this.supported;
            this.webSql = true;
            return true;
        }
        return false;
    };
    Capability.prototype.isIOS = function () {
        if (this.agent.indexOf('AppleWebKit') !== -1 &&
            (this.agent.indexOf('iPad') !== -1 || this.agent.indexOf('iPhone') !== -1)) {
            this.browser = 'ios_webview';
            this.convertVersion(this.versionMap.get('Version'));
            this.supported = this.version[0] >= 10;
            this.indexedDb = this.supported;
            this.webSql = true;
            return true;
        }
        return false;
    };
    return Capability;
}());
exports.Capability = Capability;
var DeleteBuilder = (function (_super) {
    __extends(DeleteBuilder, _super);
    function DeleteBuilder(global) {
        return _super.call(this, global, new DeleteContext(global.getService(Service.SCHEMA))) || this;
    }
    DeleteBuilder.prototype.from = function (table) {
        this.assertFromPreconditions();
        this.query.from = table;
        return this;
    };
    DeleteBuilder.prototype.where = function (predicate) {
        this.assertWherePreconditions();
        this.query.where = predicate;
        return this;
    };
    DeleteBuilder.prototype.assertExecPreconditions = function () {
        _super.prototype.assertExecPreconditions.call(this);
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(ErrorCode.INVALID_DELETE);
        }
    };
    DeleteBuilder.prototype.assertFromPreconditions = function () {
        if (this.query.from) {
            throw new Exception(ErrorCode.DUPLICATE_FROM);
        }
    };
    DeleteBuilder.prototype.assertWherePreconditions = function () {
        if (this.query.from === undefined || this.query.from === null) {
            throw new Exception(ErrorCode.FROM_AFTER_WHERE);
        }
        if (this.query.where) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
    };
    return DeleteBuilder;
}(BaseBuilder));
var InsertBuilder = (function (_super) {
    __extends(InsertBuilder, _super);
    function InsertBuilder(global, allowReplace) {
        if (allowReplace === void 0) { allowReplace = false; }
        var _this = _super.call(this, global, new InsertContext(global.getService(Service.SCHEMA))) || this;
        _this.query.allowReplace = allowReplace;
        return _this;
    }
    InsertBuilder.prototype.assertExecPreconditions = function () {
        _super.prototype.assertExecPreconditions.call(this);
        var context = this.query;
        if (context.into === undefined ||
            context.into === null ||
            context.values === undefined ||
            context.values === null) {
            throw new Exception(ErrorCode.INVALID_INSERT);
        }
        if (context.allowReplace &&
            context.into.getConstraint().getPrimaryKey() === null) {
            throw new Exception(ErrorCode.INVALID_INSERT_OR_REPLACE);
        }
    };
    InsertBuilder.prototype.into = function (table) {
        this.assertIntoPreconditions();
        this.query.into = table;
        return this;
    };
    InsertBuilder.prototype.values = function (rows) {
        this.assertValuesPreconditions();
        if (rows instanceof Binder ||
            rows.some(function (r) { return r instanceof Binder; })) {
            this.query.binder = rows;
        }
        else {
            this.query.values = rows;
        }
        return this;
    };
    InsertBuilder.prototype.assertIntoPreconditions = function () {
        if (this.query.into !== undefined && this.query.into !== null) {
            throw new Exception(ErrorCode.DUPLICATE_INTO);
        }
    };
    InsertBuilder.prototype.assertValuesPreconditions = function () {
        if (this.query.values !== undefined && this.query.values !== null) {
            throw new Exception(ErrorCode.DUPLICATE_VALUES);
        }
    };
    return InsertBuilder;
}(BaseBuilder));
var UpdateBuilder = (function (_super) {
    __extends(UpdateBuilder, _super);
    function UpdateBuilder(global, table) {
        var _this = _super.call(this, global, new UpdateContext(global.getService(Service.SCHEMA))) || this;
        _this.query.table = table;
        return _this;
    }
    UpdateBuilder.prototype.set = function (column, value) {
        var set = {
            binding: value instanceof Binder ? value.index : -1,
            column: column,
            value: value,
        };
        if (this.query.set) {
            this.query.set.push(set);
        }
        else {
            this.query.set = [set];
        }
        return this;
    };
    UpdateBuilder.prototype.where = function (predicate) {
        this.assertWherePreconditions();
        this.query.where = predicate;
        return this;
    };
    UpdateBuilder.prototype.assertExecPreconditions = function () {
        _super.prototype.assertExecPreconditions.call(this);
        if (this.query.set === undefined || this.query.set === null) {
            throw new Exception(ErrorCode.INVALID_UPDATE);
        }
        var notBound = this.query.set.some(function (set) { return set.value instanceof Binder; });
        if (notBound) {
            throw new Exception(ErrorCode.UNBOUND_VALUE);
        }
    };
    UpdateBuilder.prototype.assertWherePreconditions = function () {
        if (this.query.where) {
            throw new Exception(ErrorCode.DUPLICATE_WHERE);
        }
    };
    return UpdateBuilder;
}(BaseBuilder));
var TransactionState;
(function (TransactionState) {
    TransactionState[TransactionState["CREATED"] = 0] = "CREATED";
    TransactionState[TransactionState["ACQUIRING_SCOPE"] = 1] = "ACQUIRING_SCOPE";
    TransactionState[TransactionState["ACQUIRED_SCOPE"] = 2] = "ACQUIRED_SCOPE";
    TransactionState[TransactionState["EXECUTING_QUERY"] = 3] = "EXECUTING_QUERY";
    TransactionState[TransactionState["EXECUTING_AND_COMMITTING"] = 4] = "EXECUTING_AND_COMMITTING";
    TransactionState[TransactionState["COMMITTING"] = 5] = "COMMITTING";
    TransactionState[TransactionState["ROLLING_BACK"] = 6] = "ROLLING_BACK";
    TransactionState[TransactionState["FINALIZED"] = 7] = "FINALIZED";
})(TransactionState || (TransactionState = {}));
var StateTransition = (function () {
    function StateTransition() {
        this.map = new MapSet();
        var TS = TransactionState;
        this.map.set(TS.CREATED, TS.ACQUIRING_SCOPE);
        this.map.set(TS.CREATED, TS.EXECUTING_AND_COMMITTING);
        this.map.set(TS.ACQUIRING_SCOPE, TS.ACQUIRED_SCOPE);
        this.map.set(TS.ACQUIRED_SCOPE, TS.EXECUTING_QUERY);
        this.map.set(TS.ACQUIRED_SCOPE, TS.COMMITTING);
        this.map.set(TS.ACQUIRED_SCOPE, TS.ROLLING_BACK);
        this.map.set(TS.EXECUTING_QUERY, TS.ACQUIRED_SCOPE);
        this.map.set(TS.EXECUTING_QUERY, TS.FINALIZED);
        this.map.set(TS.EXECUTING_AND_COMMITTING, TS.FINALIZED);
        this.map.set(TS.COMMITTING, TS.FINALIZED);
        this.map.set(TS.ROLLING_BACK, TS.FINALIZED);
    }
    StateTransition.get = function () {
        if (!StateTransition.instance) {
            StateTransition.instance = new StateTransition();
        }
        return StateTransition.instance;
    };
    StateTransition.prototype.get = function (current) {
        return this.map.getSet(current);
    };
    return StateTransition;
}());
var TransactionTask = (function (_super) {
    __extends(TransactionTask, _super);
    function TransactionTask(global, scope) {
        var _this = _super.call(this) || this;
        _this.global = global;
        _this.backStore = global.getService(Service.BACK_STORE);
        _this.runner = global.getService(Service.RUNNER);
        _this.observerRegistry = global.getService(Service.OBSERVER_REGISTRY);
        _this.scope = new Set(scope);
        _this.journal = new Journal(_this.global, _this.scope);
        _this.resolver = new Resolver();
        _this.execResolver = new Resolver();
        _this.acquireScopeResolver = new Resolver();
        return _this;
    }
    TransactionTask.prototype.exec = function () {
        this.acquireScopeResolver.resolve();
        return this.execResolver.promise;
    };
    TransactionTask.prototype.getType = function () {
        return TransactionType.READ_WRITE;
    };
    TransactionTask.prototype.getScope = function () {
        return this.scope;
    };
    TransactionTask.prototype.getResolver = function () {
        return this.resolver;
    };
    TransactionTask.prototype.getId = function () {
        return this.getUniqueNumber();
    };
    TransactionTask.prototype.getPriority = function () {
        return TaskPriority.TRANSACTION_TASK;
    };
    TransactionTask.prototype.acquireScope = function () {
        this.runner.scheduleTask(this);
        return this.acquireScopeResolver.promise;
    };
    TransactionTask.prototype.attachQuery = function (queryBuilder) {
        var _this = this;
        var taskItem = queryBuilder.getTaskItem();
        return taskItem.plan
            .getRoot()
            .exec(this.journal, taskItem.context)
            .then(function (relations) {
            return relations[0].getPayloads();
        }, function (e) {
            _this.journal.rollback();
            _this.execResolver.resolve();
            throw e;
        });
    };
    TransactionTask.prototype.commit = function () {
        var _this = this;
        this.tx = this.backStore.createTx(this.getType(), Array.from(this.scope.values()), this.journal);
        this.tx.commit().then(function () {
            _this.scheduleObserverTask();
            _this.execResolver.resolve();
        }, function (e) {
            _this.journal.rollback();
            _this.execResolver.reject(e);
        });
        return this.resolver.promise;
    };
    TransactionTask.prototype.rollback = function () {
        this.journal.rollback();
        this.execResolver.resolve();
        return this.resolver.promise;
    };
    TransactionTask.prototype.stats = function () {
        var results = null;
        if (this.tx) {
            results = this.tx.stats();
        }
        return results === null ? TransactionStatsImpl.getDefault() : results;
    };
    TransactionTask.prototype.scheduleObserverTask = function () {
        var items = this.observerRegistry.getTaskItemsForTables(Array.from(this.scope.values()));
        if (items.length !== 0) {
            var observerTask = new ObserverQueryTask(this.global, items);
            this.runner.scheduleTask(observerTask);
        }
    };
    return TransactionTask;
}(UniqueId));
var RuntimeTransaction = (function () {
    function RuntimeTransaction(global) {
        this.global = global;
        this.runner = global.getService(Service.RUNNER);
        this.task = null;
        this.state = TransactionState.CREATED;
        this.stateTransition = StateTransition.get();
    }
    RuntimeTransaction.prototype.exec = function (queryBuilders) {
        var _this = this;
        this.updateState(TransactionState.EXECUTING_AND_COMMITTING);
        var taskItems = [];
        try {
            queryBuilders.forEach(function (queryBuilder) {
                queryBuilder.assertExecPreconditions();
                taskItems.push(queryBuilder.getTaskItem());
            });
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        this.task = new UserQueryTask(this.global, taskItems);
        return this.runner.scheduleTask(this.task).then(function (results) {
            _this.updateState(TransactionState.FINALIZED);
            return results.map(function (relation) { return relation.getPayloads(); });
        }, function (e) {
            _this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    };
    RuntimeTransaction.prototype.begin = function (scope) {
        var _this = this;
        this.updateState(TransactionState.ACQUIRING_SCOPE);
        this.task = new TransactionTask(this.global, scope);
        return this.task
            .acquireScope()
            .then(function () { return _this.updateState(TransactionState.ACQUIRED_SCOPE); });
    };
    RuntimeTransaction.prototype.attach = function (query) {
        var _this = this;
        this.updateState(TransactionState.EXECUTING_QUERY);
        try {
            query.assertExecPreconditions();
        }
        catch (e) {
            this.updateState(TransactionState.FINALIZED);
            return Promise.reject(e);
        }
        return this.task.attachQuery(query).then(function (result) {
            _this.updateState(TransactionState.ACQUIRED_SCOPE);
            return result;
        }, function (e) {
            _this.updateState(TransactionState.FINALIZED);
            throw e;
        });
    };
    RuntimeTransaction.prototype.commit = function () {
        var _this = this;
        this.updateState(TransactionState.COMMITTING);
        return this.task.commit().then(function (res) {
            _this.updateState(TransactionState.FINALIZED);
            return res;
        });
    };
    RuntimeTransaction.prototype.rollback = function () {
        var _this = this;
        this.updateState(TransactionState.ROLLING_BACK);
        return this.task.rollback().then(function (res) {
            _this.updateState(TransactionState.FINALIZED);
            return res;
        });
    };
    RuntimeTransaction.prototype.stats = function () {
        if (this.state !== TransactionState.FINALIZED) {
            throw new Exception(ErrorCode.INVALID_TX_ACCESS);
        }
        return this.task.stats();
    };
    RuntimeTransaction.prototype.updateState = function (newState) {
        var nextStates = this.stateTransition.get(this.state);
        if (!nextStates.has(newState)) {
            throw new Exception(ErrorCode.INVALID_TX_STATE, this.state.toString(), newState.toString());
        }
        else {
            this.state = newState;
        }
    };
    return RuntimeTransaction;
}());
var RuntimeDatabase = (function () {
    function RuntimeDatabase(global) {
        this.global = global;
        this.schema = global.getService(Service.SCHEMA);
        this.isActive = false;
        this.observeExternalChanges = false;
    }
    RuntimeDatabase.prototype.init = function (options) {
        var _this = this;
        this.global.registerService(Service.SCHEMA, this.schema);
        this.global.registerService(Service.CACHE, new DefaultCache(this.schema));
        var backStore = this.createBackStore(this.schema, options);
        this.global.registerService(Service.BACK_STORE, backStore);
        var indexStore = new MemoryIndexStore();
        this.global.registerService(Service.INDEX_STORE, indexStore);
        var onUpgrade = options ? options.onUpgrade : undefined;
        return backStore
            .init(onUpgrade)
            .then(function () {
            _this.global.registerService(Service.QUERY_ENGINE, new DefaultQueryEngine(_this.global));
            _this.runner = new Runner();
            _this.global.registerService(Service.RUNNER, _this.runner);
            _this.global.registerService(Service.OBSERVER_REGISTRY, new ObserverRegistry());
            return indexStore.init(_this.schema);
        })
            .then(function () {
            if (_this.observeExternalChanges) {
                var externalChangeObserver = new ExternalChangeObserver(_this.global);
                externalChangeObserver.startObserving();
            }
            if (options && options['enableInspector'] && window) {
                window.top['#lfInspect'] = Inspector.inspect;
                window.top['#lfRowId'] = Row.getNextId;
            }
            var prefetcher = new Prefetcher(_this.global);
            return prefetcher.init(_this.schema);
        })
            .then(function () {
            _this.isActive = true;
            return _this;
        });
    };
    RuntimeDatabase.prototype.getGlobal = function () {
        return this.global;
    };
    RuntimeDatabase.prototype.getSchema = function () {
        return this.schema;
    };
    RuntimeDatabase.prototype.select = function () {
        var columns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            columns[_i] = arguments[_i];
        }
        this.checkActive();
        return new SelectBuilder(this.global, columns);
    };
    RuntimeDatabase.prototype.insert = function () {
        this.checkActive();
        return new InsertBuilder(this.global);
    };
    RuntimeDatabase.prototype.insertOrReplace = function () {
        this.checkActive();
        return new InsertBuilder(this.global, true);
    };
    RuntimeDatabase.prototype.update = function (table) {
        this.checkActive();
        return new UpdateBuilder(this.global, table);
    };
    RuntimeDatabase.prototype.delete = function () {
        this.checkActive();
        return new DeleteBuilder(this.global);
    };
    RuntimeDatabase.prototype.observe = function (builder, callback) {
        this.checkActive();
        var observerRegistry = this.global.getService(Service.OBSERVER_REGISTRY);
        observerRegistry.addObserver(builder, callback);
    };
    RuntimeDatabase.prototype.unobserve = function (builder, callback) {
        this.checkActive();
        var observerRegistry = this.global.getService(Service.OBSERVER_REGISTRY);
        observerRegistry.removeObserver(builder, callback);
    };
    RuntimeDatabase.prototype.createTransaction = function (type) {
        this.checkActive();
        return new RuntimeTransaction(this.global);
    };
    RuntimeDatabase.prototype.close = function () {
        try {
            var backStore = this.global.getService(Service.BACK_STORE);
            backStore.close();
        }
        catch (e) {
        }
        this.global.clear();
        this.isActive = false;
    };
    RuntimeDatabase.prototype.export = function () {
        this.checkActive();
        var task = new ExportTask(this.global);
        return this.runner.scheduleTask(task).then(function (results) {
            return results[0].getPayloads()[0];
        });
    };
    RuntimeDatabase.prototype.import = function (d) {
        var data = d;
        this.checkActive();
        var task = new ImportTask(this.global, data);
        return this.runner.scheduleTask(task);
    };
    RuntimeDatabase.prototype.isOpen = function () {
        return this.isActive;
    };
    RuntimeDatabase.prototype.checkActive = function () {
        if (!this.isActive) {
            throw new Exception(ErrorCode.CONNECTION_CLOSED);
        }
    };
    RuntimeDatabase.prototype.createBackStore = function (schema, options) {
        var backStore;
        if (Global.get().getOptions().memoryOnly) {
            backStore = new Memory(schema);
            return backStore;
        }
        var dataStoreType;
        if (options === undefined || options.storeType === undefined) {
            var capability = Capability.get();
            dataStoreType = capability.indexedDb
                ? DataStoreType.INDEXED_DB
                : capability.webSql
                    ? DataStoreType.WEB_SQL
                    : DataStoreType.MEMORY;
        }
        else {
            dataStoreType = options.storeType;
        }
        switch (dataStoreType) {
            case DataStoreType.INDEXED_DB:
                backStore = new IndexedDB(this.global, schema);
                break;
            case DataStoreType.MEMORY:
                backStore = new Memory(schema);
                break;
            case DataStoreType.OBSERVABLE_STORE:
                backStore = new ObservableStore(schema);
                break;
            case DataStoreType.WEB_SQL:
                backStore = new WebSql(this.global, schema, options ? options.websqlDbSize : undefined);
                break;
            default:
                throw new Exception(ErrorCode.NOT_SUPPORTED);
        }
        return backStore;
    };
    return RuntimeDatabase;
}());
var ColumnImpl = (function () {
    function ColumnImpl(table, name, unique, nullable, type, alias) {
        this.table = table;
        this.name = name;
        this.unique = unique;
        this.nullable = nullable;
        this.type = type;
        this.alias = alias || null;
        this.indices = [];
        this.index = undefined;
    }
    ColumnImpl.prototype.getName = function () {
        return this.name;
    };
    ColumnImpl.prototype.getNormalizedName = function () {
        return "".concat(this.table.getEffectiveName(), ".").concat(this.name);
    };
    ColumnImpl.prototype.toString = function () {
        return this.getNormalizedName();
    };
    ColumnImpl.prototype.getTable = function () {
        return this.table;
    };
    ColumnImpl.prototype.getType = function () {
        return this.type;
    };
    ColumnImpl.prototype.getAlias = function () {
        return this.alias;
    };
    ColumnImpl.prototype.isNullable = function () {
        return this.nullable;
    };
    ColumnImpl.prototype.isUnique = function () {
        return this.unique;
    };
    ColumnImpl.prototype.getIndices = function () {
        var _this = this;
        this.table.getIndices().forEach(function (index) {
            var colNames = index.columns.map(function (col) { return col.schema.getName(); });
            if (colNames.indexOf(_this.name) !== -1) {
                _this.indices.push(index);
            }
        });
        return this.indices;
    };
    ColumnImpl.prototype.getIndex = function () {
        var _this = this;
        if (this.index === undefined) {
            var indices = this.getIndices().filter(function (indexSchema) {
                if (indexSchema.columns.length !== 1) {
                    return false;
                }
                return indexSchema.columns[0].schema.getName() === _this.name;
            });
            this.index =
                indices.length > 0 ? indices[0] : null;
        }
        return this.index;
    };
    ColumnImpl.prototype.eq = function (operand) {
        return createPredicate(this, operand, EvalType.EQ);
    };
    ColumnImpl.prototype.neq = function (operand) {
        return createPredicate(this, operand, EvalType.NEQ);
    };
    ColumnImpl.prototype.lt = function (operand) {
        return createPredicate(this, operand, EvalType.LT);
    };
    ColumnImpl.prototype.lte = function (operand) {
        return createPredicate(this, operand, EvalType.LTE);
    };
    ColumnImpl.prototype.gt = function (operand) {
        return createPredicate(this, operand, EvalType.GT);
    };
    ColumnImpl.prototype.gte = function (operand) {
        return createPredicate(this, operand, EvalType.GTE);
    };
    ColumnImpl.prototype.match = function (operand) {
        return createPredicate(this, operand, EvalType.MATCH);
    };
    ColumnImpl.prototype.between = function (from, to) {
        return createPredicate(this, [from, to], EvalType.BETWEEN);
    };
    ColumnImpl.prototype.in = function (values) {
        return createPredicate(this, values, EvalType.IN);
    };
    ColumnImpl.prototype.isNull = function () {
        return this.eq(null);
    };
    ColumnImpl.prototype.isNotNull = function () {
        return this.neq(null);
    };
    ColumnImpl.prototype.as = function (name) {
        return new ColumnImpl(this.table, this.name, this.unique, this.nullable, this.type, name);
    };
    return ColumnImpl;
}());
var RowImpl = (function (_super) {
    __extends(RowImpl, _super);
    function RowImpl(functionMap, columns, indices, id, payload) {
        var _this = _super.call(this, id, payload) || this;
        _this.functionMap = functionMap;
        _this.columns = columns;
        _this.payload_ = payload || _this.defaultPayload();
        return _this;
    }
    RowImpl.prototype.defaultPayload = function () {
        if (this.columns === undefined) {
            return null;
        }
        var obj = {};
        this.columns.forEach(function (col) {
            obj[col.getName()] = col.isNullable()
                ? null
                : DEFAULT_VALUES.get(col.getType());
        });
        return obj;
    };
    RowImpl.prototype.toDbPayload = function () {
        var _this = this;
        var obj = {};
        this.columns.forEach(function (col) {
            var key = col.getName();
            var type = col.getType();
            var value = _this.payload()[key];
            if (type === Type.ARRAY_BUFFER) {
                value = value ? Row.binToHex(value) : null;
            }
            else if (type === Type.DATE_TIME) {
                value = value ? value.getTime() : null;
            }
            else if (type === Type.OBJECT) {
                value = value || null;
            }
            obj[key] = value;
        });
        return obj;
    };
    RowImpl.prototype.keyOfIndex = function (indexName) {
        var key = _super.prototype.keyOfIndex.call(this, indexName);
        if (key === null) {
            var fn_1 = this.functionMap.get(indexName);
            if (fn_1) {
                return fn_1(this.payload());
            }
        }
        return key;
    };
    return RowImpl;
}(Row));
var TableImpl = (function () {
    function TableImpl(_name, cols, _indices, _usePersistentIndex, alias) {
        var _this = this;
        this._name = _name;
        this._indices = _indices;
        this._usePersistentIndex = _usePersistentIndex;
        this._columns = [];
        cols.forEach(function (col) {
            var colSchema = new ColumnImpl(_this, col.name, col.unique, col.nullable, col.type);
            _this[col.name] = colSchema;
            _this._columns.push(colSchema);
        }, this);
        this._referencingFK = null;
        this._functionMap = null;
        this._constraint = null;
        this._evalRegistry = EvalRegistry.get();
        this._alias = alias ? alias : null;
    }
    TableImpl.prototype.getName = function () {
        return this._name;
    };
    TableImpl.prototype.getAlias = function () {
        return this._alias;
    };
    TableImpl.prototype.getEffectiveName = function () {
        return this._alias || this._name;
    };
    TableImpl.prototype.getIndices = function () {
        return this._indices || TableImpl.EMPTY_INDICES;
    };
    TableImpl.prototype.getColumns = function () {
        return this._columns;
    };
    TableImpl.prototype.getConstraint = function () {
        return this._constraint;
    };
    TableImpl.prototype.persistentIndex = function () {
        return this._usePersistentIndex;
    };
    TableImpl.prototype.as = function (name) {
        var colDef = this._columns.map(function (col) {
            return {
                name: col.getName(),
                nullable: col.isNullable(),
                type: col.getType(),
                unique: col.isUnique(),
            };
        });
        var clone = new TableImpl(this._name, colDef, this._indices, this._usePersistentIndex, name);
        clone._referencingFK = this._referencingFK;
        clone._constraint = this._constraint;
        clone._alias = name;
        return clone;
    };
    TableImpl.prototype.col = function (name) {
        return this[name];
    };
    TableImpl.prototype.getRowIdIndexName = function () {
        return "".concat(this._name, ".").concat(TableImpl.ROW_ID_INDEX_PATTERN);
    };
    TableImpl.prototype.createRow = function (value) {
        return new RowImpl(this._functionMap, this._columns, this._indices, Row.getNextId(), value);
    };
    TableImpl.prototype.deserializeRow = function (dbRecord) {
        var obj = {};
        this._columns.forEach(function (col) {
            var key = col.getName();
            var type = col.getType();
            var value = dbRecord.value[key];
            if (type === Type.ARRAY_BUFFER) {
                value = Row.hexToBin(value);
            }
            else if (type === Type.DATE_TIME) {
                value = value !== null ? new Date(value) : null;
            }
            obj[key] = value;
        });
        return new RowImpl(this._functionMap, this._columns, this._indices, dbRecord.id, obj);
    };
    TableImpl.prototype.constructIndices = function (pkName, indices, uniqueIndices, nullable, fkSpecs) {
        var _this = this;
        if (indices.size === 0) {
            this._constraint = new Constraint(null, [], []);
            return;
        }
        var columnMap = new Map();
        this._columns.forEach(function (col) { return columnMap.set(col.getName(), col); });
        this._indices = Array.from(indices.keys()).map(function (indexName) {
            return new IndexImpl(_this._name, indexName, uniqueIndices.has(indexName), _this.generateIndexedColumns(indices, columnMap, indexName));
        });
        this._functionMap = new Map();
        this._indices.forEach(function (index) {
            return _this._functionMap.set(index.getNormalizedName(), _this.getKeyOfIndexFn(columnMap, index));
        });
        var pk = pkName === null
            ? null
            : new IndexImpl(this._name, pkName, true, this.generateIndexedColumns(indices, columnMap, pkName));
        var notNullable = this._columns.filter(function (col) { return !nullable.has(col.getName()); });
        this._constraint = new Constraint(pk, notNullable, fkSpecs);
    };
    TableImpl.prototype.generateIndexedColumns = function (indices, columnMap, indexName) {
        var index = indices.get(indexName);
        if (index) {
            return index.map(function (indexedColumn) {
                return {
                    autoIncrement: indexedColumn.autoIncrement,
                    order: indexedColumn.order,
                    schema: columnMap.get(indexedColumn.name),
                };
            });
        }
        throw new Exception(ErrorCode.ASSERTION);
    };
    TableImpl.prototype.getSingleKeyFn = function (columnMap, column) {
        var col = columnMap.get(column.getName());
        if (col) {
            var colType = col.getType();
            var keyOfIndexFn_1 = this._evalRegistry.getKeyOfIndexEvaluator(colType);
            return function (payload) {
                return keyOfIndexFn_1(payload[column.getName()]);
            };
        }
        throw new Exception(ErrorCode.ASSERTION);
    };
    TableImpl.prototype.getMultiKeyFn = function (columnMap, columns) {
        var _this = this;
        var getSingleKeyFunctions = columns.map(function (col) {
            return _this.getSingleKeyFn(columnMap, col.schema);
        });
        return function (payload) {
            return getSingleKeyFunctions.map(function (fn) { return fn(payload); });
        };
    };
    TableImpl.prototype.getKeyOfIndexFn = function (columnMap, index) {
        return index.columns.length === 1
            ? this.getSingleKeyFn(columnMap, index.columns[0].schema)
            : this.getMultiKeyFn(columnMap, index.columns);
    };
    TableImpl.ROW_ID_INDEX_PATTERN = '#';
    TableImpl.EMPTY_INDICES = [];
    return TableImpl;
}());
var TableBuilder = (function () {
    function TableBuilder(tableName) {
        this.checkNamingRules(tableName);
        this.name = tableName;
        this.columns = new Map();
        this.uniqueColumns = new Set();
        this.uniqueIndices = new Set();
        this.nullable = new Set();
        this.pkName = null;
        this.indices = new Map();
        this.persistIndex = false;
        this.fkSpecs = [];
    }
    TableBuilder.toPascal = function (name) {
        return name[0].toUpperCase() + name.substring(1);
    };
    TableBuilder.prototype.addColumn = function (name, type) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        this.columns.set(name, type);
        if (TableBuilder.NULLABLE_TYPES_BY_DEFAULT.has(type)) {
            this.addNullable([name]);
        }
        return this;
    };
    TableBuilder.prototype.addPrimaryKey = function (columns, autoInc) {
        if (autoInc === void 0) { autoInc = false; }
        this.pkName = 'pk' + TableBuilder.toPascal(this.name);
        this.checkNamingRules(this.pkName);
        this.checkNameConflicts(this.pkName);
        var cols = this.normalizeColumns(columns, true, undefined, autoInc);
        this.checkPrimaryKey(cols);
        if (cols.length === 1) {
            this.uniqueColumns.add(cols[0].name);
        }
        this.uniqueIndices.add(this.pkName);
        this.indices.set(this.pkName, cols);
        return this;
    };
    TableBuilder.prototype.addForeignKey = function (name, rawSpec) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        if (rawSpec.action === undefined) {
            rawSpec.action = ConstraintAction.RESTRICT;
        }
        if (rawSpec.timing === undefined) {
            rawSpec.timing = ConstraintTiming.IMMEDIATE;
        }
        var spec = new ForeignKeySpec(rawSpec, this.name, name);
        if (spec.action === ConstraintAction.CASCADE &&
            spec.timing === ConstraintTiming.DEFERRABLE) {
            throw new Exception(ErrorCode.IMMEDIATE_EVAL_ONLY);
        }
        if (!this.columns.has(spec.childColumn)) {
            throw new Exception(ErrorCode.INVALID_FK_REF, "".concat(this.name, ".").concat(name));
        }
        this.fkSpecs.push(spec);
        this.addIndex(name, [spec.childColumn], this.uniqueColumns.has(spec.childColumn));
        return this;
    };
    TableBuilder.prototype.addUnique = function (name, columns) {
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        var cols = this.normalizeColumns(columns, true);
        if (cols.length === 1) {
            this.uniqueColumns.add(cols[0].name);
            this.markFkIndexForColumnUnique(cols[0].name);
        }
        this.indices.set(name, cols);
        this.uniqueIndices.add(name);
        return this;
    };
    TableBuilder.prototype.addNullable = function (columns) {
        var _this = this;
        this.normalizeColumns(columns, false).forEach(function (col) {
            return _this.nullable.add(col.name);
        });
        return this;
    };
    TableBuilder.prototype.addIndex = function (name, columns, unique, order) {
        if (unique === void 0) { unique = false; }
        if (order === void 0) { order = Order.ASC; }
        this.checkNamingRules(name);
        this.checkNameConflicts(name);
        this.indices.set(name, this.normalizeColumns(columns, true, order));
        if (unique) {
            this.uniqueIndices.add(name);
        }
        return this;
    };
    TableBuilder.prototype.persistentIndex = function (value) {
        this.persistIndex = value;
    };
    TableBuilder.prototype.getSchema = function () {
        var _this = this;
        this.checkPrimaryKeyNotForeignKey();
        this.checkPrimaryKeyDuplicateIndex();
        this.checkPrimaryKeyNotNullable();
        var columns = Array.from(this.columns.keys()).map(function (colName) {
            return {
                name: colName,
                nullable: _this.nullable.has(colName) || false,
                type: _this.columns.get(colName),
                unique: _this.uniqueColumns.has(colName) || false,
            };
        });
        var table = new TableImpl(this.name, columns, null, this.persistIndex);
        table.constructIndices(this.pkName, this.indices, this.uniqueIndices, this.nullable, this.fkSpecs);
        return table;
    };
    TableBuilder.prototype.getFkSpecs = function () {
        return this.fkSpecs;
    };
    TableBuilder.prototype.checkNamingRules = function (name) {
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
            throw new Exception(ErrorCode.INVALID_NAME, name);
        }
    };
    TableBuilder.prototype.checkNameConflicts = function (name) {
        if (name === this.name) {
            throw new Exception(ErrorCode.DUPLICATE_NAME, name);
        }
        if (this.columns.has(name) ||
            this.indices.has(name) ||
            this.uniqueIndices.has(name)) {
            throw new Exception(ErrorCode.NAME_IN_USE, "".concat(this.name, ".").concat(name));
        }
    };
    TableBuilder.prototype.checkPrimaryKey = function (columns) {
        var _this = this;
        var hasAutoIncrement = false;
        columns.forEach(function (column) {
            var columnType = _this.columns.get(column.name);
            hasAutoIncrement =
                hasAutoIncrement || column.autoIncrement;
            if (column.autoIncrement && columnType !== Type.INTEGER) {
                throw new Exception(ErrorCode.INVALID_AUTO_KEY_TYPE);
            }
        });
        if (hasAutoIncrement && columns.length > 1) {
            throw new Exception(ErrorCode.INVALID_AUTO_KEY_COLUMN);
        }
    };
    TableBuilder.prototype.checkPrimaryKeyNotForeignKey = function () {
        if (this.pkName === null) {
            return;
        }
        var index = this.indices.get(this.pkName);
        if (index) {
            var pkColumns_1 = index.map(function (column) { return column.name; });
            var fkSpecIndex_1 = 0;
            var conflict = this.fkSpecs.some(function (fkSpec, i) {
                fkSpecIndex_1 = i;
                return pkColumns_1.indexOf(fkSpec.childColumn) !== -1;
            });
            if (conflict) {
                throw new Exception(ErrorCode.PK_CANT_BE_FK, this.fkSpecs[fkSpecIndex_1].name);
            }
        }
    };
    TableBuilder.prototype.checkPrimaryKeyDuplicateIndex = function () {
        var _this = this;
        if (this.pkName === null) {
            return;
        }
        var index = this.indices.get(this.pkName);
        if (index) {
            var extractName_1 = function (column) { return column.name; };
            var pkColumnsJson_1 = JSON.stringify(index.map(extractName_1));
            this.indices.forEach(function (indexedColumnSpecs, indexName) {
                if (indexName === _this.pkName) {
                    return;
                }
                if (JSON.stringify(indexedColumnSpecs.map(extractName_1)) === pkColumnsJson_1) {
                    throw new Exception(ErrorCode.DUPLICATE_PK, "".concat(_this.name, ".").concat(indexName));
                }
            });
        }
    };
    TableBuilder.prototype.checkPrimaryKeyNotNullable = function () {
        var _this = this;
        if (this.pkName === null) {
            return;
        }
        var index = this.indices.get(this.pkName);
        if (index) {
            index.forEach(function (indexedColumnSpec) {
                if (_this.nullable.has(indexedColumnSpec.name)) {
                    throw new Exception(ErrorCode.NULLABLE_PK, "".concat(_this.name, ".").concat(indexedColumnSpec.name));
                }
            });
        }
    };
    TableBuilder.prototype.normalizeColumns = function (columns, checkIndexable, sortOrder, autoInc) {
        var _this = this;
        if (sortOrder === void 0) { sortOrder = Order.ASC; }
        if (autoInc === void 0) { autoInc = false; }
        var normalized = null;
        if (typeof columns[0] === 'string') {
            var array = columns;
            normalized = array.map(function (col) {
                return {
                    autoIncrement: autoInc || false,
                    name: col,
                    order: sortOrder,
                };
            });
        }
        else {
            normalized = columns;
        }
        normalized.forEach(function (col) {
            if (!_this.columns.has(col.name)) {
                throw new Exception(ErrorCode.COLUMN_NOT_FOUND, _this.name, col.name);
            }
            if (checkIndexable) {
                var type = _this.columns.get(col.name);
                if (type === Type.ARRAY_BUFFER || type === Type.OBJECT) {
                    throw new Exception(ErrorCode.COLUMN_NOT_INDEXABLE, _this.name, col.name);
                }
            }
        });
        return normalized;
    };
    TableBuilder.prototype.markFkIndexForColumnUnique = function (column) {
        var _this = this;
        this.fkSpecs.forEach(function (fkSpec) {
            if (fkSpec.childColumn === column) {
                _this.uniqueIndices.add(fkSpec.name.split('.')[1]);
            }
        });
    };
    TableBuilder.NULLABLE_TYPES_BY_DEFAULT = new Set([
        Type.ARRAY_BUFFER,
        Type.OBJECT,
    ]);
    return TableBuilder;
}());
exports.TableBuilder = TableBuilder;
var GraphNode = (function () {
    function GraphNode(name) {
        this.name = name;
        this.visited = false;
        this.onStack = false;
        this.edges = new Set();
    }
    return GraphNode;
}());
var SchemaBuilder = (function () {
    function SchemaBuilder(dbName, dbVersion) {
        this.schema = new DatabaseSchemaImpl(dbName, dbVersion);
        this.tableBuilders = new Map();
        this.finalized = false;
        this.db = null;
        this.connectInProgress = false;
    }
    SchemaBuilder.prototype.getSchema = function () {
        if (!this.finalized) {
            this.finalize();
        }
        return this.schema;
    };
    SchemaBuilder.prototype.getGlobal = function () {
        var namespaceGlobalId = new ServiceId("ns_".concat(this.schema.name()));
        var global = Global.get();
        var namespacedGlobal;
        if (!global.isRegistered(namespaceGlobalId)) {
            namespacedGlobal = new Global();
            global.registerService(namespaceGlobalId, namespacedGlobal);
        }
        else {
            namespacedGlobal = global.getService(namespaceGlobalId);
        }
        return namespacedGlobal;
    };
    SchemaBuilder.prototype.connect = function (options) {
        var _this = this;
        if (this.connectInProgress || (this.db !== null && this.db.isOpen())) {
            throw new Exception(ErrorCode.ALREADY_CONNECTED);
        }
        this.connectInProgress = true;
        if (this.db === null) {
            var global_1 = this.getGlobal();
            if (!global_1.isRegistered(Service.SCHEMA)) {
                global_1.registerService(Service.SCHEMA, this.getSchema());
            }
            this.db = new RuntimeDatabase(global_1);
        }
        return this.db.init(options).then(function (db) {
            _this.connectInProgress = false;
            return db;
        }, function (e) {
            _this.connectInProgress = false;
            _this.db.close();
            throw e;
        });
    };
    SchemaBuilder.prototype.createTable = function (tableName) {
        if (this.tableBuilders.has(tableName)) {
            throw new Exception(ErrorCode.NAME_IN_USE, tableName);
        }
        else if (this.finalized) {
            throw new Exception(ErrorCode.SCHEMA_FINALIZED);
        }
        this.tableBuilders.set(tableName, new TableBuilder(tableName));
        var ret = this.tableBuilders.get(tableName);
        if (!ret) {
            throw new Exception(ErrorCode.ASSERTION, 'Builder.createTable');
        }
        return ret;
    };
    SchemaBuilder.prototype.setPragma = function (pragma) {
        if (this.finalized) {
            throw new Exception(ErrorCode.SCHEMA_FINALIZED);
        }
        this.schema._pragma = pragma;
        return this;
    };
    SchemaBuilder.prototype.checkFkCycle = function () {
        var _this = this;
        var nodeMap = new Map();
        this.schema.tables().forEach(function (table) {
            nodeMap.set(table.getName(), new GraphNode(table.getName()));
        }, this);
        this.tableBuilders.forEach(function (builder, tableName) {
            builder.getFkSpecs().forEach(function (spec) {
                var parentNode = nodeMap.get(spec.parentTable);
                if (parentNode) {
                    parentNode.edges.add(tableName);
                }
            });
        });
        Array.from(nodeMap.values()).forEach(function (graphNode) {
            return _this.checkCycleUtil(graphNode, nodeMap);
        });
    };
    SchemaBuilder.prototype.checkForeignKeyValidity = function (builder) {
        var _this = this;
        builder.getFkSpecs().forEach(function (specs) {
            var parentTableName = specs.parentTable;
            var table = _this.tableBuilders.get(parentTableName);
            if (!table) {
                throw new Exception(ErrorCode.INVALID_FK_TABLE);
            }
            var parentSchema = table.getSchema();
            var parentColName = specs.parentColumn;
            if (!Object.prototype.hasOwnProperty.call(parentSchema, parentColName)) {
                throw new Exception(ErrorCode.INVALID_FK_COLUMN);
            }
            var localSchema = builder.getSchema();
            var localColName = specs.childColumn;
            if (localSchema[localColName].getType() !==
                parentSchema[parentColName].getType()) {
                throw new Exception(ErrorCode.INVALID_FK_COLUMN_TYPE, specs.name);
            }
            if (!parentSchema[parentColName].isUnique()) {
                throw new Exception(ErrorCode.FK_COLUMN_NONUNIQUE, specs.name);
            }
        }, this);
    };
    SchemaBuilder.prototype.checkForeignKeyChain = function (builder) {
        var _this = this;
        var fkSpecArray = builder.getFkSpecs();
        fkSpecArray.forEach(function (specs) {
            var parentBuilder = _this.tableBuilders.get(specs.parentTable);
            if (parentBuilder) {
                parentBuilder.getFkSpecs().forEach(function (parentSpecs) {
                    if (parentSpecs.childColumn === specs.parentColumn) {
                        throw new Exception(ErrorCode.FK_COLUMN_IN_USE, specs.name);
                    }
                }, _this);
            }
        }, this);
    };
    SchemaBuilder.prototype.finalize = function () {
        var _this = this;
        if (!this.finalized) {
            this.tableBuilders.forEach(function (builder) {
                _this.checkForeignKeyValidity(builder);
                _this.schema.setTable(builder.getSchema());
            });
            Array.from(this.tableBuilders.values()).forEach(this.checkForeignKeyChain, this);
            this.checkFkCycle();
            this.tableBuilders.clear();
            this.finalized = true;
        }
    };
    SchemaBuilder.prototype.checkCycleUtil = function (graphNode, nodeMap) {
        var _this = this;
        if (!graphNode.visited) {
            graphNode.visited = true;
            graphNode.onStack = true;
            graphNode.edges.forEach(function (edge) {
                var childNode = nodeMap.get(edge);
                if (childNode) {
                    if (!childNode.visited) {
                        _this.checkCycleUtil(childNode, nodeMap);
                    }
                    else if (childNode.onStack) {
                        if (graphNode !== childNode) {
                            throw new Exception(ErrorCode.FK_LOOP);
                        }
                    }
                }
            }, this);
        }
        graphNode.onStack = false;
    };
    return SchemaBuilder;
}());
var schema = (function () {
    function schema() {
    }
    schema.create = function (name, version) {
        return new SchemaBuilder(name, version);
    };
    return schema;
}());
exports.schema = schema;

//# sourceMappingURL=lf.js.map
