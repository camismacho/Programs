	.data
#VARDECL
x:	.word 0
#VARDECL
y:	.word 0
	.section	.rodata
.LC0:
	.string	"hello world!\n"
.LC1:
	.string	"x=%d\n"
.LC2:
	.string	"if works!\n"
.LC3:
	.string	"else works!\n"
.LC4:
	.string	"if works!\n"
.LC5:
	.string	"else works!\n"
.LC6:
	.string	"goodbye"
.LC7:
	.string	"third arg"
.LC8:
	.string	"goodbye %s %d\n"
.LC9:
	.string	"second"
.LC10:
	.string	"Hello World!\n"
.LC11:
	.string	"loopy loop\n"
	.text
#FUNCTION
#VARDECL
a:	.word 0
#VARDECL
b:	.word 0
#VARDECL
s:	.word 0
	.globl	func
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC0, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
# ASSIGN GEN RHS 
#EXPRESSION
#CONSTANT
	movq	$42, %rdx
	pushq	%rdx
#CONSTANT
	movq	$12, %rdx
	popq	%rcx
	addq	%rcx, %rdx
# final assignment to LHS 
	movq	%rdx, x
	movq	%rdx, %rdi
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC1, %rax
	movq	%rax, %rdi
#ARGUMENT
#VARREF
	movq	x, %rdx
	movq	%rax, %rsi
	movl	$0, %eax
	call	printf
#IFTHEN
#RELEXPR
#CONSTANT
	movq	$20, %rdx
	pushq	%rdx
#CONSTANT
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jg	LL101
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC2, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	jmp	LL102
LL101:
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC3, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
LL102:#IFTHEN
#RELEXPR
#CONSTANT
	movq	$20, %rdx
	pushq	%rdx
#CONSTANT
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jl	LL103
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC4, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
	jmp	LL104
LL103:
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC5, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
LL104:
	popq	%rbp
	movl	$0, %eax
	ret
#FUNCTION
#VARDECL
argc:	.word 0
#VARDECL
argv:	.word 0
	.globl	main
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$42, %rdx
	movq	%rax, %rdi
#ARGUMENT
#CONSTANT
	movq	$.LC6, %rax
	movq	%rax, %rsi
#ARGUMENT
#CONSTANT
	movq	$.LC7, %rax
	movq	%rax, %rdx
	movl	$0, %eax
	call	func
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC8, %rax
	movq	%rax, %rdi
#ARGUMENT
#CONSTANT
	movq	$.LC9, %rax
	movq	%rax, %rsi
#ARGUMENT
#EXPRESSION
#CONSTANT
	movq	$42, %rdx
	pushq	%rdx
#EXPRESSION
#CONSTANT
	movq	$4, %rdx
	pushq	%rdx
#EXPRESSION
#VARREF
	movq	x, %rdx
	pushq	%rdx
#CONSTANT
	movq	$2, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	popq	%rcx
	addq	%rcx, %rdx
	movq	%rax, %rdx
	movl	$0, %eax
	call	printf
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC10, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
# ASSIGN GEN RHS 
#CONSTANT
	movq	$0, %rdx
# final assignment to LHS 
	movq	%rdx, x
	movq	%rdx, %rdi
#WHILE
	jmp	LL105
LL106:
#FUNCALL
#ARGUMENT
#CONSTANT
	movq	$.LC11, %rax
	movq	%rax, %rdi
	movl	$0, %eax
	call	puts
# ASSIGN GEN RHS 
#EXPRESSION
#VARREF
	movq	x, %rdx
	pushq	%rdx
#CONSTANT
	movq	$1, %rdx
	popq	%rcx
	addq	%rcx, %rdx
# final assignment to LHS 
	movq	%rdx, x
	movq	%rdx, %rdi
LL105:
#RELEXPR
#VARREF
	movq	x, %rdx
	pushq	%rdx
#CONSTANT
	movq	$10, %rdx
	popq	%rcx
	cmp	%rdx, %rcx
	jl	LL106

	popq	%rbp
	movl	$0, %eax
	ret
